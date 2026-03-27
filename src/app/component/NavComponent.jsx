import React from 'react'
import Image from 'next/image';
import { Bell, ShoppingCart } from 'lucide-react';

export default function NavComponent() {
  return (
    <div className="bg-[#ffffff] text-gray-300 flex-col ">
            <header className="h-16 border-b border-gray-800 flex justify-end items-center gap-4 px-8">
              <Bell className='text-gray-700'/>
              <ShoppingCart className='text-gray-700'/>
              <div className="flex items-center gap-2 ">
                <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-gray-300 overflow-hidden relative"> 
                  <Image src="/pro.jpg" alt="Logo" fill sizes="32px" className="object-cover" />
                </div>
                <div className="flex-col gap-2">
                  <p className="font-bold text-black">Admin user</p>
                  <p className="font-light text-gray-600">KSHRD</p>
                </div>
                
              </div>
            </header>
    </div>
  )
}
