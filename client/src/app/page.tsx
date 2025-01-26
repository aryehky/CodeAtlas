'use client';

import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import NotesSection from '../components/learning/NotesSection';
import QuizSection from '../components/learning/QuizSection';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar at top for mobile, side for desktop */}
      <div className="lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-72 lg:z-10">
        <Navbar onTopicSelect={setSelectedTopic} />
      </div>

      {/* Main Content */}
      <div className="lg:ml-72">
        <div className="p-6">
          {!selectedTopic ? (
            <div className="bg-white rounded-xl shadow-lg p-10">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to Learn To Code
              </h1>
              <p className="text-gray-600">
                Select a topic from the sidebar to start learning
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg">
                <NotesSection topicId={selectedTopic} />
              </div>
              <div className="bg-white rounded-xl shadow-lg">
                <QuizSection topicId={selectedTopic} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 