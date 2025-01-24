'use client';

import { useRouter } from 'next/navigation';

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

interface SidebarProps {
  onTopicSelect: (topic: string) => void;
}

export default function Sidebar({ onTopicSelect }: SidebarProps) {
  const router = useRouter();

  return (
    <nav className="h-full flex flex-col">
      {/* Dashboard Button */}
      <div className="p-4 border-b border-gray-200">
        <button 
          onClick={() => router.push('/dashboard')}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View Dashboard
        </button>
      </div>

      {/* Topics List */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h2 className="font-semibold text-gray-900 text-lg mb-4">Topics</h2>
        <div className="space-y-1">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => onTopicSelect(topic)}
              className="w-full text-left px-3 py-2 rounded text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
} 