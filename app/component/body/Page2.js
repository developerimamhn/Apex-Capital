"use client"

import React, { useState, useEffect, useRef } from 'react';

// AnimatedNumber Component
const AnimatedNumber = ({ target, symbol, suffix, duration }) => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef(null);

  // Intersection Observer to trigger animation when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when in view
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Start the animation only when the number is visible in the viewport
  useEffect(() => {
    if (isVisible) {
      const stepTime = duration / target; // Calculate step time for smooth increment
      const interval = setInterval(() => {
        setCurrent((prev) => {
          if (prev < target) {
            return Math.min(prev + 1, target); // Increment until target is reached
          }
          clearInterval(interval); // Stop interval when target is reached
          return target;
        });
      }, stepTime);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isVisible, target, duration]);

  return (
    <h3 className="numbering" ref={numberRef}>
      {symbol}{current}{suffix}
    </h3>
  );
};

// Page2 Component
const Page2 = () => {
  return (
    <div className="container mx-auto px-[24px] sm:pb-0 pb-[60px] md:pb-[80px] lg:pb-[120px] xl:pb-[150px] 2xl:pb-[200px] relative">
      <svg className='absolute z-[-1] left-[50%] translate-x-[-50%] bottom-[0] w-[30%]' viewBox="0 0 643 424" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_788)">
<rect width="643" height="643" fill="white"/>
<line x1="675" y1="401.5" x2="-31" y2="401.5" stroke="url(#paint0_linear_1_788)" stroke-opacity="0.4"/>
<line x1="675" y1="223.5" x2="-31" y2="223.5" stroke="url(#paint1_linear_1_788)" stroke-opacity="0.4"/>
<line x1="53.5" y1="632" x2="53.5" y2="11" stroke="url(#paint2_linear_1_788)" stroke-opacity="0.4"/>
<line x1="221.5" y1="632" x2="221.5" y2="11" stroke="url(#paint3_linear_1_788)" stroke-opacity="0.4"/>
<line x1="389.5" y1="632" x2="389.5" y2="11" stroke="url(#paint4_linear_1_788)" stroke-opacity="0.4"/>
<line x1="557.5" y1="632" x2="557.5" y2="11" stroke="url(#paint5_linear_1_788)" stroke-opacity="0.4"/>
</g>
<defs>
<linearGradient id="paint0_linear_1_788" x1="-31" y1="400.5" x2="675" y2="400.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#151515" stop-opacity="0"/>
<stop offset="0.505" stop-color="#151515" stop-opacity="0.4"/>
<stop offset="1" stop-color="#151515" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_1_788" x1="-31" y1="222.5" x2="675" y2="222.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#151515" stop-opacity="0"/>
<stop offset="0.505" stop-color="#151515" stop-opacity="0.4"/>
<stop offset="1" stop-color="#151515" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_1_788" x1="54.5" y1="11" x2="54.5" y2="632" gradientUnits="userSpaceOnUse">
<stop stop-color="#151515" stop-opacity="0"/>
<stop offset="0.505" stop-color="#151515" stop-opacity="0.4"/>
<stop offset="1" stop-color="#151515" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_1_788" x1="222.5" y1="11" x2="222.5" y2="632" gradientUnits="userSpaceOnUse">
<stop stop-color="#151515" stop-opacity="0"/>
<stop offset="0.505" stop-color="#151515" stop-opacity="0.4"/>
<stop offset="1" stop-color="#151515" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_1_788" x1="390.5" y1="11" x2="390.5" y2="632" gradientUnits="userSpaceOnUse">
<stop stop-color="#151515" stop-opacity="0"/>
<stop offset="0.505" stop-color="#151515" stop-opacity="0.4"/>
<stop offset="1" stop-color="#151515" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_1_788" x1="558.5" y1="11" x2="558.5" y2="632" gradientUnits="userSpaceOnUse">
<stop stop-color="#151515" stop-opacity="0"/>
<stop offset="0.505" stop-color="#151515" stop-opacity="0.4"/>
<stop offset="1" stop-color="#151515" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_1_788">
<rect width="643" height="643" fill="white"/>
</clipPath>
</defs>
</svg>
      <div className="flex justify-between items-start flex-col sm:flex-row gap-[60px] sm:gap-[0] ">
      

        {/* Text Section */}
        <div>
          <p className="growingonfsdaeef">Join over 150 startups already growing</p>
          <h2 className="mettingcompo">Meet the companies <br /> rewiring industries</h2>
          <button className="seeporeafebtn hover:bg-none hover:!text-[#002FA1] border-[1px] duration-300 hover:border-[#005DCF]">See Our Portfolio</button>
        </div>

        {/* Stats Section */}
        <div>
          <div className="flex flex-col gap-[25px] sm:gap-[28px] md:gap-[33px] lg:gap-[44px] xl:gap-[50px] 2xl:gap-[64px]">
            <div>
              <AnimatedNumber target={150} suffix="+" duration={1000} />
              <p className="componiesp !text-[#252A4E] hover:!text-[#252A4E]">Companies</p>
            </div>

            <div>
              <AnimatedNumber target={100} symbol="£" suffix="M+" duration={1000} />
              <p className="componiesp !text-[#252A4E] hover:!text-[#252A4E]">Under Management</p>
            </div>

            <div>
              <AnimatedNumber target={14} suffix="+" duration={1000} />
              <p className="componiesp !text-[#252A4E] hover:!text-[#252A4E]">Exits to Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
