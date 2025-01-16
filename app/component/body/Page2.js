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
    <div className="container mx-auto px-[24px] sm:pb-0 pb-[60px] md:pb-[80px] lg:pb-[120px] xl:pb-[150px] 2xl:pb-[200px]">
      <div className="flex justify-between items-start flex-col sm:flex-row gap-[60px] sm:gap-[0]">
        {/* Text Section */}
        <div>
          <p className="growingonfsdaeef">Join over 150 startups already growing</p>
          <h2 className="mettingcompo">Meet the companies <br /> rewiring industries</h2>
          <button className="seeporeafebtn">See Our Portfolio</button>
        </div>

        {/* Stats Section */}
        <div>
          <div className="flex flex-col gap-[25px] sm:gap-[28px] md:gap-[33px] lg:gap-[44px] xl:gap-[50px] 2xl:gap-[64px]">
            <div>
              <AnimatedNumber target={150} suffix="+" duration={1000} />
              <p className="componiesp">Companies</p>
            </div>

            <div>
              <AnimatedNumber target={100} symbol="£" suffix="M+" duration={1000} />
              <p className="componiesp">Under Management</p>
            </div>

            <div>
              <AnimatedNumber target={14} suffix="+" duration={1000} />
              <p className="componiesp">Exits to Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
