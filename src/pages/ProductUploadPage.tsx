import React, { useState, useEffect } from 'react';
import { Upload, AlertCircle, Loader } from 'lucide-react';
import Papa from 'papaparse';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import axios from 'axios';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const ProductUploadPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Partial<Product>[]>([]);

  useEffect(() => {
    // Redirect non-admin users
    if (!isAdmin) {
      toast.error('Access denied. Admin privileges required.');
      navigate('/');
    }
  }, [isAdmin, navigate]);

  // If not admin, don't render the component
  if (!isAdmin) {
    return null;
  }

  const parseWooCommerceProduct = (row: any): Partial<Product> => {
    const categoryParts = (row['Categories'] || row['Product Categories'] || '')
      .split('>')
      .map((cat: string) => cat.trim())
      .filter(Boolean);
    
    const category = categoryParts.length > 0 ? 
      categoryParts[categoryParts.length - 1].toLowerCase().replace(/[^a-z0-9]+/g, '-') : 
      'uncategorized';

    const imageUrls = (row['Images'] || row['Image'] || row['Product Image'])
      ?.split(',')
      .map((url: string) => url.trim())
      .filter(Boolean) || [];

    if (imageUrls.length === 0) {
      imageUrls.push('https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg');
    }

    const regularPrice = row['Regular price'] || row['_regular_price'] || row['Price'] || '0';
    const salePrice = row['Sale price'] || row['_sale_price'] || '';

    const parsePrice = (price: string): number => {
      const numericValue = price.replace(/[^0-9.-]+/g, '');
      return numericValue ? parseInt(numericValue) : 0;
    };

    const productId = row['ID'] || row['Product ID'] || row['SKU'] || `wp-${Date.now()}`;

    const stockStatus = (row['Stock status'] || row['_stock_status'] || '').toLowerCase();
    const stockQuantity = parseInt(row['Stock'] || row['_stock'] || '0');
    const inStock = stockStatus === 'instock' || stockStatus === 'in stock' || stockQuantity > 0;

    try {
      return {
        id: productId,
        name: row['Name'] || row['Product Name'] || row['post_title'] || 'Untitled Product',
        category,
        price: parsePrice(regularPrice),
        sale_price: salePrice ? parsePrice(salePrice) : null,
        images: imageUrls,
        description: row['Description'] || row['Product Description'] || row['post_content'] || '',
        short_description: row['Short description'] || row['Product Short Description'] || row['post_excerpt'] || '',
        specifications: {
          Weight: row['Weight'] || 'N/A',
          Dimensions: [
            row['Length'] || row['_length'] || '0',
            row['Width'] || row['_width'] || '0',
            row['Height'] || row['_height'] || '0'
          ].join(' x '),
          SKU: row['SKU'] || row['_sku'] || 'N/A',
          'Product Type': row['Type'] || row['Product Type'] || 'Simple'
        },
        in_stock: inStock,
        featured: (row['Featured'] || row['_featured'] || 'no').toLowerCase() === 'yes',
        best_seller: false,
        is_new: true,
        rating: 0,
        review_count: 0
      };
    } catch (error) {
      console.error('Error parsing product:', error, row);
      throw new Error(`Failed to parse product: ${error.message}`);
    }
  };

  const parseCustomProduct = (row: any): Partial<Product> => {
    try {
      return {
        id: row.id || `custom-${Date.now()}`,
        name: row.name,
        category: row.category?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'uncategorized',
        price: parseInt(row.price) || 0,
        sale_price: row.salePrice ? parseInt(row.salePrice) : null,
        images: row.images ? row.images.split('|').map((url: string) => url.trim()) : 
          ['https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg'],
        description: row.description || '',
        short_description: row.shortDescription || '',
        specifications: typeof row.specifications === 'string' ? 
          JSON.parse(row.specifications) : 
          row.specifications || {},
        in_stock: row.inStock === 'true' || row.inStock === true,
        featured: row.featured === 'true' || row.featured === true,
        best_seller: row.bestSeller === 'true' || row.bestSeller === true,
        is_new: row.isNew === 'true' || row.isNew === true,
        rating: parseFloat(row.rating) || 0,
        review_count: parseInt(row.reviewCount) || 0,
        video_url: row.videoUrl || null
      };
    } catch (error) {
      console.error('Error parsing custom product:', error, row);
      throw new Error(`Failed to parse custom product: ${error.message}`);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          if (!results.data || results.data.length === 0) {
            throw new Error('No data found in CSV file');
          }

          const headers = results.meta.fields || [];
          const isWooCommerce = headers.some(header => 
            ['ID', 'SKU', 'Regular price', '_regular_price', 'Categories', 'Product Name', 'Name']
              .includes(header)
          );

          console.log('CSV Headers:', headers);
          console.log('Detected format:', isWooCommerce ? 'WooCommerce' : 'Custom');

          const parsedProducts = results.data
            .filter((row: any) => Object.keys(row).length > 0)
            .map((row: any, index: number) => {
              try {
                return isWooCommerce ? 
                  parseWooCommerceProduct(row) : 
                  parseCustomProduct(row);
              } catch (error) {
                console.error(`Error parsing row ${index + 1}:`, error);
                throw new Error(`Error in row ${index + 1}: ${error.message}`);
              }
            });

          if (parsedProducts.length === 0) {
            throw new Error('No valid products found in CSV');
          }

          setProducts(parsedProducts);
          toast.success(`Successfully parsed ${parsedProducts.length} products`);
          console.log('Sample parsed product:', parsedProducts[0]);
        } catch (error) {
          console.error('Error processing CSV:', error);
          setError(error.message);
          toast.error(`Error: ${error.message}`);
        } finally {
          setUploading(false);
        }
      },
      error: (error) => {
        console.error('Error reading CSV:', error);
        setError('Failed to read CSV file');
        toast.error('Failed to read CSV file');
        setUploading(false);
      }
    });
  };

  const createProducts = async () => {
    if (products.length === 0) {
      toast.error('No products to create');
      return;
    }

    setCreating(true);
    setError(null);

    try {
      // Call backend API to upsert products
      const response = await axios.post('/api/products', products);

      const { successCount, errorCount } = response.data;

      if (successCount > 0) {
        toast.success(`Successfully created/updated ${successCount} products`);
      }

      if (errorCount > 0) {
        toast.error(`Failed to create ${errorCount} products`);
      }

      if (errorCount === 0) {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error creating products:', error);
      setError('Failed to create products');
      toast.error('Failed to create products');
    } finally {
      setCreating(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'text/csv') {
      const input = document.getElementById('csvUpload') as HTMLInputElement;
      if (input) {
        input.files = e.dataTransfer.files;
        handleFileUpload({ target: input } as any);
      }
    } else {
      toast.error('Please upload a CSV file');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Upload Products</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Supported Formats</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-blue-400 mr-2" />
                <div className="text-sm text-blue-700">
                  <p className="font-medium">Compatible with:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>WooCommerce Product Export CSV</li>
                    <li>Standard WooCommerce CSV format</li>
                    <li>Custom CSV format</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
              ${uploading ? 'border-gray-400 bg-gray-50' : 'border-gray-300 hover:border-blue-500'}`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              id="csvUpload"
              disabled={uploading}
            />
            <label
              htmlFor="csvUpload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className={`h-12 w-12 mb-4 ${uploading ? 'text-gray-400' : 'text-blue-500'}`} />
              <span className="text-gray-600 mb-2">
                {uploading ? 'Uploading...' : 'Click to upload or drag and drop'}
              </span>
              <span className="text-sm text-gray-500">
                CSV files only
              </span>
            </label>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {products.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">
                  {products.length} products ready to create
                </span>
                <Button
                  onClick={createProducts}
                  disabled={creating}
                  className="flex items-center"
                >
                  {creating ? (
                    <>
                      <Loader className="animate-spin h-4 w-4 mr-2" />
                      Creating...
                    </>
                  ) : (
                    'Create All Products'
                  )}
                </Button>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Preview:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {products.slice(0, 3).map((product, index) => (
                    <li key={index}>
                      {product.name} - {product.category} - ₹{product.price}
                    </li>
                  ))}
                  {products.length > 3 && (
                    <li className="text-gray-500">
                      ...and {products.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-6 text-sm text-gray-500">
            <p>Tips:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Export your products from WooCommerce: Products → Export</li>
              <li>Make sure your CSV file is properly formatted</li>
              <li>Required fields: Name, Price, Category</li>
              <li>Images should be valid URLs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUploadPage;