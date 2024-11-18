"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = (href) => {
    return pathname === href
      ? "text-blue-500 border-b-2 border-blue-500"  // Active link style
      : "text-white hover:text-blue-500";            // Inactive link style
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logomain.png" className="h-8" alt="SHOP.CO Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                      SHOP.CO 
                  </span>
              </Link>
              
              
        <div className="flex md:order-2 items-center">
          <button className="m-2 mr-3 cartbtn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <Link href="/login" className="hover:text-blue-500 border-2 hover:border-blue-500 border-white text-white focus:outline-none font-medium text-md rounded-md text-sm py-1.5 px-4 mx-2 transition-all">
            Sign In
          </Link>
          <Link href="/login" className="hover:text-blue-500 border-2 hover:border-blue-500 border-white text-white focus:outline-none font-medium text-md rounded-md text-sm py-1.5 px-4 mx-2 transition-all">
            Sign In
          </Link>
          <button
            onClick={toggleMenu}
            className="togglenavbtn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="nav_links flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li >
              <Link href="/" className={`${linkClass('/')}`}>
                Home
              </Link>
            </li>
            <li >
              <Link href="/products" className={`${linkClass('/products')}`}>
                Products
                
              </Link>
              <Link href="/products" className={`${linkClass('/products')}`}>
                Products
                
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
