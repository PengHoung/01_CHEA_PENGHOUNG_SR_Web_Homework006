import React from 'react';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <div className="relative">
        <h1 className="text-[150px] md:text-[200px] font-black text-gray-50 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Oops! Page not found.
          </h2>
        </div>
      </div>
      <p className="text-gray-500 max-w-md mb-10 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable. Don&apos;t worry, our products are still here!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95"
        >
          <Home size={20} />
          Back to Homepage
        </Link>
        
        <Link
          href="/products"
          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-gray-200 text-slate-700 font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
        >
          <Search size={20} />
          Browse Products
        </Link>
      </div>
      <p className="mt-12 text-sm text-gray-400">
        Need help? <a href="#" className="text-blue-500 hover:underline font-medium">Contact Support</a>
      </p>
    </div>
  );
}