'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const topics = [
  "AWS",
  "C++",
  "CSS",
  "EDGEQL",
  "HTML",
  "JavaScript",
  "Python",
  "React",
  "SQL",
  "TypeScript"
];

interface NavbarProps {
  onTopicSelect: (topic: string) => void;
}

export default function Navbar({ onTopicSelect }: NavbarProps) {
  const pathname = usePathname();

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

        {/* Topics List */}
        <div className="flex-grow overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">Topics</h2>
          <div className="grid gap-2 pr-2">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => onTopicSelect(topic)}
                className={`group relative w-full rounded-lg p-3 text-left transition-all duration-200
                  ${pathname === `/topic/${topic.toLowerCase()}` 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <span className="relative z-10">{topic}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100 rounded-lg" />
              </button>
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