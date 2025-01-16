"use client";

import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ target, duration }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const stepTime = duration / target;
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev < target) {
          return Math.min(prev + 1, target); // Increment number, but don't exceed target
        }
        clearInterval(interval); // Stop the animation when the target is reached
        return target;
      });
    }, stepTime);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [target, duration]);

  return (
    <div>
      <h1>{current}</h1>
    </div>
  );
};

export default AnimatedNumber;
