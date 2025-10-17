"use client";
import Script from 'next/script';
import Image from "next/image";
import BusinessPaymentsSection from "../components/BusinessPaymentsSection";

export default function Home() {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-40 overflow-hidden">
        {/* Background Image - Outside Container */}
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 overflow-hidden">
          <Image 
            src="/dust-background.png"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Mockup Image - Outside Container, on top of background */}
        <div className="absolute top-0 right-0 h-full w-full lg:w-3/6 overflow-visible z-10">
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <Image 
              src="/mockup.webp"
              alt="App Mockup"
             width={900}
             height={700}
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto safe-area relative z-20">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-blue-500 font-medium text-xl mb-3">Bharat Ka</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                Business<br />Payment app
              </h1>
              <div className="mb-6">
                <p className="text-base text-gray-700 mb-2">A Complete Business Solution:</p>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Payments</span>
                  <span className="text-gray-400">|</span>
                  <span className="font-medium">Credit</span>
                  <span className="text-gray-400">|</span>
                  <span className="font-medium">Commerce</span>
                </div>
              </div>
              
              <div className="mb-8">
                <a href="#download" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium rounded-lg transition-all">
                  Download App
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">Rated 4.5/5 stars</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Dashed Borders */}
      <section className="py-8">
        <div className="container mx-auto safe-area">
          <div className="border-t border-b border-dashed border-gray-300 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Left Stat */}
              <div className="flex items-center mb-6 md:mb-0">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">1 Lakh+ Businesses</h3>
                  <p className="text-gray-600">Powering Retailers, Distributors, Manufacturers & more</p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-16 bg-gray-300 mx-4"></div>

              {/* Right Stat */}
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">250+ Cities</h3>
                  <p className="text-gray-600">Accepted by Businesses in every part of India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Businesses Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        {/* Background Image - Centered */}
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <div className="w-3/4 h-3/4">
            <Image 
              src="/dust-background.png"
              alt="Background Pattern"
              fill
              className="object-contain opacity-20"
            />
          </div>
        </div>
        
        <div className="container mx-auto safe-area relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              <span className="text-blue-500">Trusted By</span> Businesses
            </h2>
            <h3 className="text-3xl font-bold">Across Industries</h3>
          </div>
          
          <div className="flex justify-center items-start overflow-x-auto pb-4 space-x-0">
            {/* Pharma Distributor Card */}
            <div className="flex-shrink-0 w-56 rounded-3xl shadow-lg overflow-hidden border-2 border-white mt-5 transition-transform duration-300 hover:scale-95">
              <div className="relative h-100">
                <Image 
                  src="/b1.avif"
                  alt="Pharma Distributor"
                  fill
                  className="object-cover"
                />
                
              </div>
            </div>
            
            {/* Textile Retailer Card */}
            <div className="flex-shrink-0 w-56 rounded-3xl shadow-lg overflow-hidden border-2 border-white transition-transform duration-300 hover:scale-95">
              <div className="relative h-100">
                <Image 
                  src="/b2.avif"
                  alt="Textile Retailer"
                  fill
                  className="object-cover"
                />
               
              </div>
            </div>
            
            {/* Electronics Manufacturer Card */}
            <div className="flex-shrink-0 w-56 rounded-3xl shadow-lg overflow-hidden border-2 border-white mt-5 transition-transform duration-300 hover:scale-95">
              <div className="relative h-100">
                <Image 
                  src="/b3.avif"
                  alt="Electronics Manufacturer"
                  fill
                  className="object-cover"
                />
               
              </div>
            </div>
            
            {/* FMCG Wholesaler Card */}
            <div className="flex-shrink-0 w-56 rounded-3xl shadow-lg overflow-hidden border-2 border-white transition-transform duration-300 hover:scale-95">
              <div className="relative h-100">
                <Image 
                  src="/b4.avif"
                  alt="FMCG Wholesaler"
                  fill
                  className="object-cover"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One App for Business Payments Section */}
      <BusinessPaymentsSection />
    
    </div>
  );
}
        
     