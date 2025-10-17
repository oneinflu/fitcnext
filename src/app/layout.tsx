
"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderWithClientSideToggle />
        {children}
      </body>
    </html>
  );
}




function HeaderWithClientSideToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto bg-white py-2 shadow-sm">
      <div className="safe-area flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Fit-C Logo" 
            width={80} 
            height={32} 
            className="h-7 w-auto"
          />
        </a>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 mr-4">
            <a href="/gst-search" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
              GST Number Search
            </a>
            
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 text-sm font-medium flex items-center">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 text-sm font-medium flex items-center">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <a href="/about" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
              About Us
            </a>
          </nav>

          {/* Download App Button */}
          <div className="hidden md:block">
            <a href="/download" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2.5 rounded-md text-sm font-medium">
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white border-t border-gray-100 shadow-sm">
          <div className="safe-area flex flex-col space-y-3 py-4">
            <a href="/gst-search" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
              GST Number Search
            </a>
            <a href="/products" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
              Products
            </a>
            <a href="/resources" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
              Resources
            </a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
              About Us
            </a>
            <a href="/download" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium text-center mt-2 w-full md:w-auto">
              Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


