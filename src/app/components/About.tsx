"use client";

import React, { useState, useEffect } from 'react';

export default function About() {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isAlwaysVisible, setIsAlwaysVisible] = useState(false);

  useEffect(() => {
    // trigger fade-in effect for the top paragraph
    const topTimeout = setTimeout(() => {
      setIsTopVisible(true);
    }, 100); // delay for top paragraph

    // trigger fade-in for the "Always learning" sentence after 1s
    const alwaysTimeout = setTimeout(() => {
      setIsAlwaysVisible(true);
    }, 1000); // show "Always learning" after 1s

    return () => {
      clearTimeout(topTimeout);
      clearTimeout(alwaysTimeout);
    }; // cleanup timeouts on unmount
  }, []);

  return (
    <section className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 max-w-3xl min-h-48">
        <h2 className="text-2xl sm:text-4xl mb-4 text-center">Aibo Feng</h2>
        <div className="container mx-auto px-4 h-[200px] flex flex-col justify-center p-8">
          <p
            className={`text-sm sm:text-base leading-relaxed text-center font-times transition-opacity duration-1000 ease-in-out ${
              isTopVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Computer Science &apos;25 at the{" "}
            <a
              href="https://www.washington.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-gray-100 transition-colors duration-300 group"
            > 
              University of Washington<span
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100 scale-x-0 origin-right group-hover:origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
            . Previous intern @{" "}
            <a
              href="https://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-gray-100 transition-colors duration-300 group"
            >
              AWS <span
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100 scale-x-0 origin-right group-hover:origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              /> 
            </a>
            and {" "}
            <a
              href="https://www.oracle.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-gray-100 transition-colors duration-300 group"
            >
              Oracle<span
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100 scale-x-0 origin-right group-hover:origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
            . Interested in full-stack development, deep learning, distributed systems, and cloud infrastructure.
            <span className={`transition-opacity duration-1000 ease-in-out ml-1 ${isAlwaysVisible ? "opacity-100" : "opacity-0"}`}>
              Always learning.
            </span>
          </p>
          <br />
        </div>
      </div>
    </section>
  );
}
