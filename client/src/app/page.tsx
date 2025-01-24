'use client';

import { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import NotesSection from '@/components/learning/NotesSection';
import QuizSection from '@/components/learning/QuizSection';
import Image from 'next/image';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <main className="mr-72 min-h-screen">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* Welcome Section */}
          <div className="bg-white rounded-xl shadow-lg p-10 mb-10 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-3">
                Welcome to Code Atlas
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                everything you need to know
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/react.png"
              alt="React logo"
              width={800}
              height={600}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <NotesSection topicId={selectedTopic} />
            <QuizSection topicId={selectedTopic} />
          </div>
        </div>
      </main>

      {/* Right Navigation */}
      <Navbar onTopicSelect={setSelectedTopic} />
    </div>
  );
} 