"use client";

import { useState } from "react";
import { ThemeToggleButton } from "./theme-toggle-button";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("The Challenge");

  const navButtons = [
    { name: "The Challenge", href: "#problem" },
    { name: "Our Solution", href: "#solution" },
    { name: "Behind the Scenes", href: "#how-it-works-new" },
    { name: "Who Benefits", href: "#use-cases" },
    { name: "In Action", href: "#relevance-engine" }
  ];

  const externalLinks = [
    { name: "Thought Process", href: "/thought-process" }
  ];

  const scrollToSection = (href) => {
    console.log('Scrolling to:', href);
    const element = document.querySelector(href);
    console.log('Found element:', element);
    
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.offsetTop - navbarHeight;
      console.log('Element position:', element.offsetTop, 'Adjusted position:', elementPosition);
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    } else {
      console.error('Element not found for:', href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            {/* Cube Logo */}
            <div className="w-8 h-8 rounded-lg border border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-400 flex items-center justify-center">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-blue-600 dark:text-blue-400"
              >
                <path 
                  d="M3 8L12 3L21 8V16L12 21L3 16V8Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M3 8L12 13L21 8" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M12 13V21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              LokNiti
            </h1>
          </div>

                {/* Navigation Buttons */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navButtons.map((button) => (
                      <button
                        key={button.name}
                        onClick={() => {
                          console.log('Button clicked:', button.name, 'href:', button.href);
                          setActiveButton(button.name);
                          scrollToSection(button.href);
                        }}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          activeButton === button.name
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent hover:bg-opacity-50"
                        }`}
                      >
                        {button.name}
                      </button>
                    ))}
                    {externalLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-accent hover:bg-opacity-50"
                      >
                        {link.name}
                      </a>
                    ))}
                    <ThemeToggleButton />
                    <a
                      href="http://127.0.0.1:5000/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
                    >
                      See Demo
                    </a>
                  </div>
                </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggleButton />
            <button className="text-foreground hover:text-accent-foreground p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}