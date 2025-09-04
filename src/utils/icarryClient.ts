// Lightweight iCarry client – replace endpoint paths as per real docs

export interface ICarryConfig {
  apiBaseUrl: string; // https://www.icarry.in
  username: string;   // API username
  key: string;        // API key
}

export interface QuoteRequest {
  originPincode: string;
  destinationPincode: string;
  weightKg: number;
  lengthCm?: number;
  widthCm?: number;
  heightCm?: number;
  cod?: boolean; // shipment_type: C (COD) / P (Prepaid)
  mode?: 'E' | 'S'; // shipment_mode: E Express / S Surface
  declaredValue?: number;
}

export interface QuoteResponse {
  carrier: string;
  service: string;
  etaDays?: number;
  amount: number;
  currency: string;
  breakdown?: Record<string, number>;
}

export interface ServiceabilityResponse {
  serviceable: boolean;
  reason?: string;
}

export interface CreateShipmentRequest extends QuoteRequest {
  orderId: string;
  receiver: {
    name: string;
    phone: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    pincode: string;
  };
  sender: {
    name: string;
    phone: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export interface CreateShipmentResponse {
  success: boolean;
  awb: string;
  labelUrl?: string;
  trackingUrl?: string;
  raw?: any;
}

export interface TrackingResponse {
  awb: string;
  status: string;
  currentLocation?: string;
  expectedDelivery?: string;
  deliveredDate?: string;
  events: Array<{
    date: string;
    time: string;
    location: string;
    status: string;
    description: string;
  }>;
}

export interface ShipmentChargesResponse {
  awb: string;
  totalCharges: number;
  breakdown: {
    shippingCharges?: number;
    codCharges?: number;
    fuelSurcharge?: number;
    gst?: number;
    other?: number;
  };
}

export class ICarryClient {
  private config: ICarryConfig;
  private apiToken: string | null = null;
  private tokenFetchedAt: number | null = null;

  constructor(config: ICarryConfig) {
    this.config = config;
  }

  private formHeaders(): HeadersInit {
    return { 'Content-Type': 'application/x-www-form-urlencoded' };
  }

  private async ensureToken(): Promise<string> {
    const now = Date.now();
    if (this.apiToken && this.tokenFetchedAt && now - this.tokenFetchedAt < 55 * 60 * 1000) {
      console.log('🔑 Using cached iCarry token');
      return this.apiToken;
    }
    
    console.log('🔑 Fetching new iCarry token...');
    const body = new URLSearchParams();
    body.append('username', this.config.username);
    body.append('Key', this.config.key);
    
    const res = await fetch(`${this.config.apiBaseUrl}/api_login`, {
      method: 'POST',
      headers: this.formHeaders(),
      body,
    });
    
    if (!res.ok) {
      console.error('❌ iCarry login failed:', res.status, res.statusText);
      throw new Error(`iCarry login failed: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('🔑 iCarry login response:', data);
    
    if (!data.api_token) {
      console.error('❌ iCarry login missing api_token');
      throw new Error('iCarry login missing api_token');
    }
    
    this.apiToken = data.api_token;
    this.tokenFetchedAt = Date.now();
    console.log('✅ iCarry token obtained successfully');
    return this.apiToken!;
  }

  async getQuote(payload: QuoteRequest): Promise<QuoteResponse> {
    console.log('📦 iCarry getQuote called with:', payload);
    const apiToken = await this.ensureToken();
    // Map to iCarry estimate request per official docs
    const length = Math.round(payload.lengthCm ?? 10);
    const breadth = Math.round(payload.widthCm ?? 10);
    const height = Math.round(payload.heightCm ?? 10);

    const weight = Math.max(Math.round((payload.weightKg || 1) * 1000), 500); // grams, min 500g
    const shipment_type = payload.cod ? 'C' : 'P';
    const shipment_mode = payload.mode ?? 'S';
    const shipment_value = Number(payload.declaredValue ?? 1000);

    const params = new URLSearchParams();
    params.append('length', String(length));
    params.append('breadth', String(breadth));
    params.append('height', String(height));
    params.append('weight', String(weight));
    params.append('destination_pincode', payload.destinationPincode);
    params.append('origin_pincode', payload.originPincode);
    params.append('destination_country_code', 'IN');
    params.append('origin_country_code', 'IN');
    params.append('shipment_mode', shipment_mode);
    params.append('shipment_type', shipment_type);
    params.append('shipment_value', String(shipment_value));

    const res = await fetch(`${this.config.apiBaseUrl}/api_get_estimate&api_token=${apiToken}`, {
      method: 'POST',
      headers: this.formHeaders(),
      body: params,
    });
    if (!res.ok) throw new Error(`iCarry estimate failed: ${res.status}`);
    const data = await res.json();
    if (!data.success) throw new Error(`iCarry estimate error: ${data.error || 'unknown'}`);
    // Pick the cheapest courier from estimate[]
    const list = Array.isArray(data.estimate) ? data.estimate : [];
    const cheapest = list
      .map((e: any) => ({
        carrier: e.courier_group_name || 'iCarry',
        service: e.courier_name || 'STANDARD',
        amount: Number(e.courier_cost || 0),
      }))
      .sort((a: any, b: any) => a.amount - b.amount)[0];
    if (!cheapest) throw new Error('No iCarry services available');
    return {
      carrier: cheapest.carrier,
      service: cheapest.service,
      amount: cheapest.amount,
      currency: 'INR',
    };
  }

  async checkServiceability(pincode: string): Promise<ServiceabilityResponse> {
    const apiToken = await this.ensureToken();
    const params = new URLSearchParams();
    params.append('pincode', pincode);
    const res = await fetch(`${this.config.apiBaseUrl}/api_check_serviceability&api_token=${apiToken}`, {
      method: 'POST',
      headers: this.formHeaders(),
      body: params,
    });
    if (!res.ok) throw new Error(`iCarry serviceability failed: ${res.status}`);
    const data = await res.json();
    return { serviceable: !!data.serviceable, reason: data.error };
  }

  async createShipment(payload: CreateShipmentRequest): Promise<CreateShipmentResponse> {
    const apiToken = await this.ensureToken();
    // Minimal required mapping for single shipment booking
    const params = new URLSearchParams();
    params.append('length', String(Math.round(payload.lengthCm ?? 10)));
    params.append('breadth', String(Math.round(payload.widthCm ?? 10)));
    params.append('height', String(Math.round(payload.heightCm ?? 10)));
    params.append('weight', String(Math.max(Math.round((payload.weightKg || 1) * 1000), 500)));
    params.append('origin_pincode', payload.originPincode);
    params.append('destination_pincode', payload.destinationPincode);
    params.append('origin_country_code', 'IN');
    params.append('destination_country_code', 'IN');
    params.append('shipment_mode', payload.mode ?? 'S');
    params.append('shipment_type', payload.cod ? 'C' : 'P');
    params.append('shipment_value', String(payload.declaredValue ?? 1000));
    // Receiver
    params.append('receiver_name', payload.receiver.name);
    params.append('receiver_phone', payload.receiver.phone);
    params.append('receiver_street1', payload.receiver.address1);
    params.append('receiver_city', payload.receiver.city);
    params.append('receiver_state', payload.receiver.state);
    params.append('receiver_pincode', payload.receiver.pincode);
    // Sender
    params.append('sender_name', payload.sender.name);
    params.append('sender_phone', payload.sender.phone);
    params.append('sender_street1', payload.sender.address1);
    params.append('sender_city', payload.sender.city);
    params.append('sender_state', payload.sender.state);
    params.append('sender_pincode', payload.sender.pincode);

    const res = await fetch(`${this.config.apiBaseUrl}/api_book_shipment&api_token=${apiToken}`, {
      method: 'POST',
      headers: this.formHeaders(),
      body: params,
    });
    if (!res.ok) throw new Error(`iCarry create shipment failed: ${res.status}`);
    const data = await res.json();
    return {
      success: !!data.success,
      awb: data.awb || data.awb_no || data.airwaybill || '',
      labelUrl: data.label_url,
      trackingUrl: data.tracking_url,
      raw: data,
    };
  }

  async trackShipment(awb: string): Promise<TrackingResponse> {
    const apiToken = await this.ensureToken();
    const params = new URLSearchParams();
    params.append('awb', awb);
    
    const res = await fetch(`${this.config.apiBaseUrl}/api_track_shipment&api_token=${apiToken}`, {
      method: 'POST',
      headers: this.formHeaders(),
      body: params,
    });
    if (!res.ok) throw new Error(`iCarry tracking failed: ${res.status}`);
    const data = await res.json();
    
    // Map iCarry tracking response to our format
    const events = Array.isArray(data.tracking_data) 
      ? data.tracking_data.map((event: any) => ({
          date: event.date || '',
          time: event.time || '',
          location: event.location || '',
          status: event.status || '',
          description: event.activity || event.description || '',
        }))
      : [];
    
    return {
      awb,
      status: data.current_status || data.status || 'Unknown',
      currentLocation: data.current_location,
      expectedDelivery: data.expected_delivery_date,
      deliveredDate: data.delivered_date,
      events,
    };
  }

  async syncShipmentStatus(awb: string): Promise<{ status: string; location?: string }> {
    const apiToken = await this.ensureToken();
    const params = new URLSearchParams();
    params.append('awb', awb);
    
    const res = await fetch(`${this.config.apiBaseUrl}/api_sync_shipment_status&api_token=${apiToken}`, {
      method: 'POST',
      headers: this.formHeaders(),
      body: params,
    });
    if (!res.ok) throw new Error(`iCarry sync status failed: ${res.status}`);
    const data = await res.json();
    
    return {
      status: data.status || 'Unknown',
      location: data.location,
    };
  }

  async getShipmentCharges(awb: string): Promise<ShipmentChargesResponse> {
    const apiToken = await this.ensureToken();
    const params = new URLSearchParams();
    params.append('awb', awb);
    
    const res = await fetch(`${this.config.apiBaseUrl}/api_sync_shipment_charges&api_token=${apiToken}`, {
      method: 'POST',
      headers: this.formHeaders(),
      body: params,
    });
    if (!res.ok) throw new Error(`iCarry charges failed: ${res.status}`);
    const data = await res.json();
    
    return {
      awb,
      totalCharges: Number(data.total_charges || 0),
      breakdown: {
        shippingCharges: Number(data.shipping_charges || 0),
        codCharges: Number(data.cod_charges || 0),
        fuelSurcharge: Number(data.fuel_surcharge || 0),
        gst: Number(data.gst || 0),
        other: Number(data.other_charges || 0),
      },
    };
  }

  async cancelShipment(awb: string): Promise<{ success: boolean; message?: string }> {
    const apiToken = await this.ensureToken();
    const params = new URLSearchParams();
    params.append('awb', awb);
    
    const res = await fetch(`${this.config.apiBaseUrl}/api_cancel_shipment&api_token=${apiToken}`, {
      method: 'POST',
      headers: this.formHeaders(),
      body: params,
    });
    if (!res.ok) throw new Error(`iCarry cancel failed: ${res.status}`);
    const data = await res.json();
    
    return {
      success: !!data.success,
      message: data.message || data.error,
    };
  }

  async printLabel(awb: string): Promise<{ labelUrl: string }> {
    const apiToken = await this.ensureToken();
    const params = new URLSearchParams();
    params.append('awb', awb);
    
    const res = await fetch(`${this.config.apiBaseUrl}/api_print_shipment_label&api_token=${apiToken}`, {
      method: 'POST',
      headers: this.formHeaders(),
      body: params,
    });
    if (!res.ok) throw new Error(`iCarry print label failed: ${res.status}`);
    const data = await res.json();
    
    return {
      labelUrl: data.label_url || data.pdf_url || '',
    };
  }
}

// Helper to read config from env
export const getICarryClientFromEnv = () => {
  const apiBaseUrl = (import.meta as any).env?.VITE_ICARRY_BASE_URL;
  const username = (import.meta as any).env?.VITE_ICARRY_USERNAME;
  const key = (import.meta as any).env?.VITE_ICARRY_KEY;
  
  // Check if any required config is missing
  if (!apiBaseUrl || !username || !key) {
    const missing = [];
    if (!apiBaseUrl) missing.push('VITE_ICARRY_BASE_URL');
    if (!username) missing.push('VITE_ICARRY_USERNAME');
    if (!key) missing.push('VITE_ICARRY_KEY');
    
    throw new Error(`iCarry config missing: ${missing.join(', ')}. Please set these environment variables.`);
  }
  
  return new ICarryClient({ apiBaseUrl, username, key });
};

// Helper to check if iCarry is configured
export const isICarryConfigured = () => {
  const apiBaseUrl = (import.meta as any).env?.VITE_ICARRY_BASE_URL;
  const username = (import.meta as any).env?.VITE_ICARRY_USERNAME;
  const key = (import.meta as any).env?.VITE_ICARRY_KEY;
  
  // Debug logging
  console.log('iCarry Config Check:', {
    apiBaseUrl: apiBaseUrl ? 'SET' : 'MISSING',
    username: username ? 'SET' : 'MISSING', 
    key: key ? 'SET' : 'MISSING',
    configured: !!(apiBaseUrl && username && key)
  });
  
  return !!(apiBaseUrl && username && key);
};

// Mock client for testing when iCarry is not configured
export const getMockICarryClient = () => {
  return {
    getQuote: async (payload: QuoteRequest) => {
      // Dynamic pricing based on destination pincode
      const destPin = parseInt(payload.destinationPincode);
      let amount = 500; // Default
      
      // Different pricing based on pincode ranges
      if (destPin >= 400000 && destPin <= 499999) {
        // Maharashtra - Lower cost
        amount = 300;
      } else if (destPin >= 110000 && destPin <= 110099) {
        // Delhi - Medium cost
        amount = 400;
      } else if (destPin >= 560000 && destPin <= 560099) {
        // Bangalore - Medium cost
        amount = 450;
      } else if (destPin >= 700000 && destPin <= 700099) {
        // Kolkata - Higher cost
        amount = 600;
      } else if (destPin >= 600000 && destPin <= 600099) {
        // Chennai - Higher cost
        amount = 550;
      } else {
        // Other locations - Standard cost
        amount = 500;
      }
      
      return {
        carrier: 'Mock Carrier',
        service: 'STANDARD',
        amount: amount,
        currency: 'INR',
      };
    },
    checkServiceability: async () => ({ serviceable: true }),
    createShipment: async () => ({ success: true, awb: 'MOCK123456789' }),
    trackShipment: async () => ({ awb: 'MOCK123456789', status: 'In Transit', events: [] }),
    syncShipmentStatus: async () => ({ status: 'In Transit' }),
    getShipmentCharges: async () => ({ awb: 'MOCK123456789', totalCharges: 500, breakdown: {} }),
    cancelShipment: async () => ({ success: true }),
    printLabel: async () => ({ labelUrl: '#' }),
  };
};


