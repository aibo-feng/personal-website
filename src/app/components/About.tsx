"use client";

import React, { useState, useEffect } from 'react';

export default function About() {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useEffect(() => {
    // trigger fade-in effect for the top paragraph
    const topTimeout = setTimeout(() => {
      setIsTopVisible(true);
    }, 100); // delay for top paragraph

    // trigger fade-in effect for the bottom paragraph
    const bottomTimeout = setTimeout(() => {
      setIsBottomVisible(true);
    }, 390); // slightly longer delay for bottom paragraph

    return () => {
      clearTimeout(topTimeout);
      clearTimeout(bottomTimeout);
    }; // cleanup timeouts on unmount
  }, []);

  return (
    <section className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 max-w-3xl min-h-48">
        <h2 className="text-2xl sm:text-4xl mb-4 text-center">Aibo Feng</h2>
        <div className="container mx-auto px-4 h-[200px] flex flex-col justify-center p-8">
          <p
            className={`text-sm sm:text-base leading-relaxed text-center font-times transition-opacity duration-1000 ease-in-out ${
              isTopVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Computer Science &apos;26 at the University of Washington. Previous intern @ AWS.
            Interested in full-stack development, cloud computing, and building cool things.
          </p>
          <br />
          <p
            className={`text-sm sm:text-base leading-relaxed text-center font-times transition-opacity duration-1000 ease-in-out ${
              isBottomVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Enjoyer of basketball, hiking, reading, and geoguessr.
          </p>
        </div>
      </div>
    </section>
  );
}
