"use client";

import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  external?: boolean; // Indicates if the link is external
}

export default function Navbar() {
  const navItems: NavItem[] = [
    { label: "home", href: "./" },
    { label: "projects", href: "./projects" },
    { label: "resume", href: "./AiboFengResume.pdf", external: true },
    { label: "linkedIn", href: "https://www.linkedin.com/in/aibo/", external: true },
    { label: "email", href: "mailto:aibo.feng1@gmail.com", external: true },
  ];

  return (
    <nav className="bg-gray-900 p-4 z-10">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex items-center space-x-4">
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              {/* navbar item */}
              <li className="relative group">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-400 hover:text-gray-100 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-gray-100 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}

                {/* sliding line */}
                <span
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100 scale-x-0 origin-right group-hover:origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </li>

              {/* separator - don't add after the last item */}
              {index < navItems.length - 1 && (
                <span className="text-gray-500 select-none" aria-hidden="true">
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
}
