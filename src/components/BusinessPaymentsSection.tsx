'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';


interface PaymentSection {
  id: number;
  title: string;
  description: string;
  points: string[];
  animationSteps: React.ReactNode[];
}

const paymentSections: PaymentSection[] = [
  {
    id: 0,
    title: 'Supplier Payments',
    description: 'Simplify tracking, scheduling and view all your supplier transactions in one place.',
    points: [
      'Track, schedule and pay suppliers effortlessly from one centralized platform',
      'Get automatic reminders to avoid missed deadlines and late fees',
      'Manage your supplier payment history and real-time status updates seamlessly'
    ],
    animationSteps: [
      // Step 1: Supplier list
      <div key="supplier-1" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-sm font-medium mb-3 text-blue-600">Suppliers</div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between mb-3 p-2 border-b">
            <div>
              <div className="font-medium">Supplier {i}</div>
              <div className="text-xs text-gray-500">Last paid: 12 May</div>
            </div>
            <div className="text-sm font-medium">₹{(i * 5000).toLocaleString()}</div>
          </div>
        ))}
      </div>,
      // Step 2: Supplier selection
      <div key="supplier-2" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-sm font-medium mb-3 text-blue-600">Selected Supplier</div>
        <div className="bg-blue-50 p-3 rounded-md mb-3">
          <div className="font-medium">Supplier 2</div>
          <div className="text-xs text-gray-500">Due: 15 June</div>
          <div className="text-lg font-bold mt-2">₹10,000</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-xs">Payment method</div>
          <div className="text-xs font-medium">UPI ▼</div>
        </div>
      </div>,
      // Step 3: Payment confirmation
      <div key="supplier-3" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-center mb-4">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-2">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="text-lg font-bold">Payment Successful</div>
          <div className="text-sm text-gray-500">Supplier 2</div>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between text-sm mb-1">
            <div>Amount</div>
            <div className="font-medium">₹10,000</div>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <div>Transaction ID</div>
            <div className="font-medium">TXN123456</div>
          </div>
        </div>
      </div>
    ]
  },
  {
    id: 1,
    title: 'Invoice Payments',
    description: 'Auto-import all purchase invoices directly from the GST portal & make payments using any mode.',
    points: [
      'Automate invoice management by fetching purchase invoices directly from the GST portal',
      'Review, track and pay invoices via UPI, card or bank transfer',
      'Enjoy hassle-free payment processing from a single, easy-to-use platform'
    ],
    animationSteps: [
      // Step 1: Invoice list
      <div key="invoice-1" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-sm font-medium mb-3 text-blue-600">Purchase Invoices</div>
        <div className="text-xs text-gray-500 mb-3">Total invoices imported: 200</div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between mb-3 p-2 border-b">
            <div className="flex items-center">
              <div className="mr-3 text-green-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <div className="font-medium">Invoice #{i}</div>
                <div className="text-xs text-gray-500">Ramesh Kumar</div>
              </div>
            </div>
            <div className="text-sm font-medium">₹{(i * 5000).toLocaleString()}</div>
          </div>
        ))}
      </div>,
      // Step 2: Invoice detail
      <div key="invoice-2" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-sm font-medium mb-3 text-blue-600">Invoice #2</div>
        <div className="bg-blue-50 p-3 rounded-md mb-3">
          <div className="flex justify-between mb-1">
            <div className="text-xs">Vendor</div>
            <div className="text-xs font-medium">Asha Condiments</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">Invoice Date</div>
            <div className="text-xs font-medium">10 June 2023</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">Amount</div>
            <div className="text-xs font-medium">₹15,908</div>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium">
          Pay Now
        </button>
      </div>,
      // Step 3: Payment success
      <div key="invoice-3" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-center mb-4">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-2">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="text-lg font-bold">Invoice Paid</div>
          <div className="text-sm text-gray-500">Asha Condiments</div>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between text-sm mb-1">
            <div>Amount</div>
            <div className="font-medium">₹15,908</div>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <div>Payment Method</div>
            <div className="font-medium">UPI</div>
          </div>
        </div>
      </div>
    ]
  },
  {
    id: 2,
    title: 'Pay Utility Bills',
    description: 'Manage all utility expenses for your store in one single dashboard.',
    points: [
      'Consolidate and track all your utility bills—rent, electricity, water, internet and more',
      'Set up automatic payments to ensure timely payments and avoid penalties',
      'Stay informed with notifications for upcoming due dates'
    ],
    animationSteps: [
      // Step 1: Utility bills dashboard
      <div key="utility-1" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-sm font-medium mb-3 text-blue-600">Utility Bills</div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-blue-50 p-2 rounded-md">
            <div className="text-xs text-gray-500">Electricity</div>
            <div className="font-medium">₹3,450</div>
            <div className="text-xs text-red-500">Due in 3 days</div>
          </div>
          <div className="bg-blue-50 p-2 rounded-md">
            <div className="text-xs text-gray-500">Water</div>
            <div className="font-medium">₹1,200</div>
            <div className="text-xs text-gray-500">Due in 15 days</div>
          </div>
          <div className="bg-blue-50 p-2 rounded-md">
            <div className="text-xs text-gray-500">Internet</div>
            <div className="font-medium">₹999</div>
            <div className="text-xs text-gray-500">Due in 20 days</div>
          </div>
          <div className="bg-blue-50 p-2 rounded-md">
            <div className="text-xs text-gray-500">Rent</div>
            <div className="font-medium">₹15,000</div>
            <div className="text-xs text-gray-500">Paid</div>
          </div>
        </div>
      </div>,
      // Step 2: Bill selection
      <div key="utility-2" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-sm font-medium mb-3 text-blue-600">Electricity Bill</div>
        <div className="bg-blue-50 p-3 rounded-md mb-3">
          <div className="flex justify-between mb-1">
            <div className="text-xs">Bill Number</div>
            <div className="text-xs font-medium">EB-12345678</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">Due Date</div>
            <div className="text-xs font-medium">15 June 2023</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">Amount</div>
            <div className="text-xs font-medium">₹3,450</div>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium">
          Pay Now
        </button>
      </div>,
      // Step 3: Payment confirmation
      <div key="utility-3" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-center mb-4">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-2">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="text-lg font-bold">Bill Paid</div>
          <div className="text-sm text-gray-500">Electricity</div>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between text-sm mb-1">
            <div>Amount</div>
            <div className="font-medium">₹3,450</div>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <div>Transaction ID</div>
            <div className="font-medium">UTL987654</div>
          </div>
        </div>
      </div>
    ]
  },
  {
    id: 3,
    title: 'Pay GST Challan',
    description: 'Make GST payments simpler and more efficient.',
    points: [
      'Simplify monthly GST challan payments with our automated system',
      'Import and pay GST Challan in just 2 clicks with real-time tracking',
      'Get reminders for due dates to ensure accuracy and avoid late penalties'
    ],
    animationSteps: [
      // Step 1: GST dashboard
      <div key="gst-1" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-sm font-medium mb-3 text-blue-600">GST Payments</div>
        <div className="bg-blue-50 p-3 rounded-md mb-3">
          <div className="flex justify-between mb-1">
            <div className="text-xs">GSTIN</div>
            <div className="text-xs font-medium">27AAPFU0939F1ZV</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">Period</div>
            <div className="text-xs font-medium">April 2023</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">Due Date</div>
            <div className="text-xs text-red-500 font-medium">20 May 2023</div>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium">
          Import Challan
        </button>
      </div>,
      // Step 2: Challan details
      <div key="gst-2" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-sm font-medium mb-3 text-blue-600">GST Challan Details</div>
        <div className="bg-blue-50 p-3 rounded-md mb-3">
          <div className="flex justify-between mb-1">
            <div className="text-xs">Challan No.</div>
            <div className="text-xs font-medium">GST-123456789</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">CGST</div>
            <div className="text-xs font-medium">₹2,800</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">SGST</div>
            <div className="text-xs font-medium">₹2,800</div>
          </div>
          <div className="flex justify-between mb-1">
            <div className="text-xs">Total</div>
            <div className="text-xs font-medium">₹5,600</div>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium">
          Pay Now
        </button>
      </div>,
      // Step 3: Payment success
      <div key="gst-3" className="bg-white rounded-lg p-4 shadow-md w-full">
        <div className="text-center mb-4">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-2">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="text-lg font-bold">GST Paid</div>
          <div className="text-sm text-gray-500">April 2023</div>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between text-sm mb-1">
            <div>Amount</div>
            <div className="font-medium">₹5,600</div>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <div>ARN</div>
            <div className="font-medium">AB123456789</div>
          </div>
        </div>
      </div>
    ]
  }
];

export default function BusinessPaymentsSection() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const activeIndexRef = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const currentStepRef = useRef<number>(0);

  useEffect(() => {
    // Create the intersection observer
    const setupObserver = () => {
      const paymentTriggers = document.querySelectorAll('.step');
      const scrollContainer = document.getElementById('scroll-container');
      
      if (paymentTriggers.length === 0 || !scrollContainer) {
        console.warn('No payment triggers found or scroll container not found');
        return;
      }
      
      // Create the intersection observer for payment section
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Get the index from the data attribute
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            
            // Only update if the active index has changed
            if (activeIndexRef.current !== index) {
              activeIndexRef.current = index;
              currentStepRef.current = 0; // Reset animation step when section changes
              
              // Clear any existing animation timer
              if (animationTimerRef.current) {
                clearTimeout(animationTimerRef.current);
              }
              
              // Update active state
              updateActiveSection(index);
              
              // Start animation sequence for the new section
              startAnimationSequence(index);
            }
          }
        });
      }, { 
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px',
        root: scrollContainer
      });
      
      // Observe all payment triggers
      paymentTriggers.forEach(trigger => {
        observerRef.current?.observe(trigger);
      });
      
      // Set first section as active on load
      updateActiveSection(0);
      startAnimationSequence(0);
    };
    
    // Function to start animation sequence for a section
    const startAnimationSequence = (sectionIndex: number) => {
      const section = paymentSections[sectionIndex];
      if (!section) return;
      
      const totalSteps = section.animationSteps.length;
      currentStepRef.current = 0;
      
      const animateNextStep = () => {
        if (activeIndexRef.current !== sectionIndex) return; // Stop if section changed
        
        const stepElements = document.querySelectorAll(`[data-section="${sectionIndex}"][data-step]`);
        
        // Hide all steps
        stepElements.forEach(el => {
          (el as HTMLElement).style.opacity = '0';
          (el as HTMLElement).style.zIndex = '0';
        });
        
        // Show current step
        const currentStep = document.querySelector(`[data-section="${sectionIndex}"][data-step="${currentStepRef.current}"]`);
        if (currentStep) {
          (currentStep as HTMLElement).style.opacity = '1';
          (currentStep as HTMLElement).style.zIndex = '10';
        }
        
        // Schedule next step if not at the end
        if (currentStepRef.current < totalSteps - 1) {
          currentStepRef.current++;
          animationTimerRef.current = setTimeout(animateNextStep, 2000);
        } else {
          // Reset to first step after showing all
          currentStepRef.current = 0;
          animationTimerRef.current = setTimeout(animateNextStep, 3000);
        }
      };
      
      // Start the animation sequence
      animateNextStep();
    };
    
    // Add wheel event listener to the entire section
    const handleWheel = (e: WheelEvent) => {
      const scrollContainer = document.getElementById('scroll-container');
      if (scrollContainer) {
        e.preventDefault();
        scrollContainer.scrollTop += e.deltaY;
      }
    };
    
    // Add the wheel event listener to the section
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
    }

   
    const updateActiveSection = (activeIndex: number) => {
      // Update content visibility
      paymentSections.forEach((_, index) => {
        const content = document.getElementById(`payment-content-${index}`);
        if (content) {
          if (index === activeIndex) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
          } else {
            content.style.opacity = '0.2';
            content.style.transform = 'translateY(20px)';
          }
        }
        
        // Update image visibility
        const image = document.getElementById(`payment-image-${index}`);
        if (image) {
          if (index === activeIndex) {
            image.classList.remove('opacity-0');
            image.classList.add('opacity-100');
          } else {
            image.classList.remove('opacity-100');
            image.classList.add('opacity-0');
          }
        }
      });
    };

    // Setup observer after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setupObserver();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // Remove wheel event listener on cleanup
      if (section) {
        section.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  // Function to render animated mockup for each section
  const renderAnimatedMockup = (section: PaymentSection, isActive: boolean) => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-[280px] h-[560px] bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-100">
          {/* Phone mockup header */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-blue-50 flex items-center justify-between px-4 z-10">
            <div className="text-sm font-medium text-gray-700">{section.title}</div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="text-xs text-gray-500">12:30</div>
            </div>
          </div>
          
          {/* Content area with animation */}
          <div className="absolute top-12 left-0 right-0 bottom-0 bg-blue-50/30 overflow-hidden">
            {section.animationSteps.map((step, index) => (
              <div
                key={`${section.id}-step-${index}`}
                data-section={section.id}
                data-step={index}
                className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500"
                style={{ 
                  opacity: index === 0 && isActive ? 1 : 0,
                  zIndex: index === 0 && isActive ? 10 : 0
                }}
              >
                {step}
              </div>
            ))}
            
            {/* Step indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {section.animationSteps.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    isActive ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-2 bg-white" ref={sectionRef}>
      <div className="container mx-auto safe-area">
        <h2 className="text-4xl font-bold text-blue-500 mb-0">One App for</h2>
        <h2 className="text-5xl font-bold mb-1">Business Payments</h2>
        
        <div className="business-payments-section flex flex-col md:flex-row relative">
          {/* Left Content - Fixed height with scrollable content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <div className="sticky top-20 h-[600px] overflow-hidden">
              {/* Scroll container with hidden scrollbar */}
              <div 
                className="h-full overflow-y-auto pr-4" 
                id="scroll-container"
                style={{
                  scrollbarWidth: 'none', /* Firefox */
                  msOverflowStyle: 'none', /* IE and Edge */
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {/* Hide scrollbar for Chrome, Safari and Opera */}
                <style jsx>{`
                  #scroll-container::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                
                {/* Content sections in a continuous flow */}
                <div className="pt-[150px] pb-[20px]">
                  {paymentSections.map((section) => (
                    <div 
                      key={`section-${section.id}`}
                      className="mb-[200px] last:mb-[150px]"
                    >
                      {/* Invisible trigger for intersection observer */}
                      <div 
                        className="step h-1 mb-16" 
                        data-index={section.id} 
                        id={`payment-trigger-${section.id}`}
                      ></div>
                      
                      {/* Visible content */}
                      <div 
                        id={`payment-content-${section.id}`} 
                        className="payment-content transition-all duration-500"
                        style={{
                          opacity: section.id === 0 ? 1 : 0.2,
                          transform: section.id === 0 ? 'translateY(0)' : 'translateY(20px)'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-[#2676FC] w-1 h-[2rem]"></div>
                          <span className="text-xl md:text-2xl lg:text-4xl font-semibold">{section.title}</span>
                        </div>
                        <div className="text-base pl-4 md:text-lg md:mt-2 md:max-w-64 lg:max-w-96">
                          {section.description}
                          <ul className="list-disc text-[#1D2433] opacity-[0.7] mt-2 text-sm md:text-base">
                            {section.points.map((point, idx) => (
                              <li key={idx} className="pointer-item leading-loose">{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Graphics - Sticky with fixed height */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="sticky top-20 h-[600px] flex items-center justify-center">
              {/* Dust background image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] relative">
                  <Image 
                    src="/dust-background.png" 
                    alt="Background" 
                    fill 
                    className="object-contain opacity-70"
                  />
                </div>
              </div>
              
              {/* Phone mockups with animations */}
              <div className="w-full h-full pointer-events-none relative z-10">
                {paymentSections.map((section) => (
                  <div 
                    key={`mockup-${section.id}`}
                    className={`absolute inset-0 transition-opacity duration-700 ${section.id === activeIndexRef.current ? 'opacity-100' : 'opacity-0'}`} 
                    id={`payment-image-${section.id}`}
                  >
                    {renderAnimatedMockup(section, section.id === activeIndexRef.current)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}