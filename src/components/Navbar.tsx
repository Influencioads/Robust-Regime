import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Navbar: React.FC = () => {
  const { items } = useWishlist();

  return (
    // <nav className="bg-indigo-600">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <div className="flex-shrink-0">
    //           <Link to="/" className="text-white font-bold text-xl">
    //             E-Commerce
    //           </Link>
    //         </div>
    //         <div className="hidden md:block">
    //           <div className="ml-10 flex items-baseline space-x-4">
    //             <Link
    //               to="/wishlist"
    //               className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
    //             >
    //               <Heart className="h-4 w-4 mr-1" />
    //               Wishlist
    //               {items.length > 0 && (
    //                 <span className="ml-1 bg-red-500 text-white rounded-full px-2 text-xs">
    //                   {items.length}
    //                 </span>
    //               )}
    //             </Link>
    //             <Link
    //               to="/orders"
    //               className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Orders
    //             </Link>
    //             <Link
    //               to="/create-order"
    //               className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Create Order
    //             </Link>
    //           </div>
    //         </div>
    //         {/* Mobile icons */}
    //         <div className="md:hidden flex items-center space-x-4 ml-auto">
    //           <Link
    //             to="/wishlist"
    //             className="text-white p-2 rounded-md hover:bg-indigo-500 flex items-center"
    //           >
    //             <Heart className="h-5 w-5" />
    //             {items.length > 0 && (
    //               <span className="-ml-1 -mt-2 bg-red-500 text-white rounded-full px-1 text-xs">
    //               {items.length}
    //             </span>
    //           )}
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <></>
  );
};

export default Navbar;