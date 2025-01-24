'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface TopicCategory {
  name: string;
  topics: string[];
}

const categories: TopicCategory[] = [
  {
    name: "Languages",
    topics: [
      "C++",
      "CSS",
      "HTML",
      "Java",
      "JavaScript",
      "Python",
      "Solidity",
      "TypeScript"
    ]
  },
  {
    name: "Frameworks",
    topics: [
      "Next.js",
      "React",
      "Tailwind"
    ]
  },
  {
    name: "Databases",
    topics: [
      "EdgeQL",
      "SQL",
      "PostgreSQL",
      "Firebase"
    ]
  },
  {
    name: "Hosting",
    topics: [
      "Vercel",
      "AWS"
    ]
  },
  {
    name: "Query Languages",
    topics: [
      "GraphQL"
    ]
  },
  {
    name: "Tools",
    topics: [
      "Git",
      "NPM"
    ]
  },
  {
    name: "Testing",
    topics: [
      "Jest",
      "Cypress"
    ]
  },
  {
    name: "Security",
    topics: [
      "OAuth",
      "JWT",
      "SecureDB"
    ]
  },
  {
    name: "Visualization",
    topics: [
      "ChartJS",
      "D3"
    ]
  }
];

const topics = [
  "AWS",
  "CSS",
  "HTML",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "JEST",
  "CYPRESS",
  "OAUTH",
  "JWT",
  "SECUREDB",
  "CHARTJS",
  "D3",
  "REACT",
  "FIREBASE",
  "NEXTJS",
  "POSTGRESQL"
];

interface NavbarProps {
  onTopicSelect: (topic: string) => void;
}

export default function Navbar({ onTopicSelect }: NavbarProps) {
  const pathname = usePathname();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <nav className="fixed right-0 top-0 h-full w-72 bg-gray-900 text-white shadow-2xl">
      <div className="p-8 flex flex-col h-full">
        {/* Header */}
        <Link href="/" className="block mb-8 hover:opacity-90 transition-opacity">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Learn To Code
          </h1>
          <p className="text-sm text-gray-400 mt-1">Your coding journey starts here</p>
        </Link>

        {/* Home Button */}
        <Link 
          href="/"
          className="group relative overflow-hidden rounded-lg bg-blue-500 px-4 py-3 text-center transition-all duration-300 hover:bg-blue-600 mb-8"
        >
          <span className="relative z-10 font-medium">Home</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>

        {/* Categories and Topics */}
        <div className="flex-grow overflow-y-auto">
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="mb-4">
                <button
                  onClick={() => toggleCategory(category.name)}
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
                        onClick={() => onTopicSelect(topic.toUpperCase())}
                        className={`w-full rounded-lg p-2 text-left transition-all duration-200
                          ${pathname === `/topic/${topic.toLowerCase()}` 
                            ? 'bg-gray-700 text-white' 
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                          }`}
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

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-gray-800">
          <p className="text-sm text-gray-500">&copy; 2024 Learn To Code</p>
        </div>
      </div>
    </nav>
  );
}