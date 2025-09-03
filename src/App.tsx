import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Routes from './Routes';
import Navbar from './components/Navbar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import FloatingButtons from './components/ui/FloatingButtons';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <WishlistProvider>
            <BrowserRouter>
              <Toaster position="top-right" />
              <div className="flex flex-col min-h-screen">
                <Header />
                <Navbar />
                <main className="flex-grow bg-gray-100">
                  <Routes />
                </main>
                <FloatingButtons />
                <Footer />
              </div>
            </BrowserRouter>
          </WishlistProvider>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
  {/* Your routes */}
</BrowserRouter>

export default App;
