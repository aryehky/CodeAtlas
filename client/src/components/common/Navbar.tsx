'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onTopicSelect: (topic: string) => void;
}

export default function Navbar({ onTopicSelect }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    {
      name: "Languages",
      topics: ["C++", "CSS", "HTML", "JavaScript", "Python", "TypeScript"]
    },
    {
      name: "Frameworks",
      topics: ["Next.js", "React"]
    },
    {
      name: "Databases",
      topics: ["PostgreSQL", "Firebase"]
    },
    {
      name: "Testing",
      topics: ["Jest", "Cypress"]
    },
    // Add other categories as needed
  ];

  return (
    <nav className="bg-gray-900 text-white">
      {/* Hamburger Menu Button */}
      <div className="p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Learn To Code
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-gray-800 rounded"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="p-4 space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => setExpandedCategory(
                  expandedCategory === category.name ? null : category.name
                )}
                className="w-full text-left px-4 py-2 text-gray-300 hover:text-white font-semibold flex justify-between items-center"
              >
                <span>{category.name}</span>
                <span className="text-sm">
                  {expandedCategory === category.name ? '▼' : '▶'}
                </span>
              </button>
              
              {expandedCategory === category.name && (
                <div className="ml-4 space-y-1 mt-2">
                  {category.topics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => {
                        onTopicSelect(topic.toUpperCase());
                        setIsOpen(false); // Close menu on mobile after selection
                      }}
                      className="w-full rounded-lg p-2 text-left text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}