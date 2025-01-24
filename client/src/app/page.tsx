'use client';

import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import NotesSection from '../components/learning/NotesSection';
import QuizSection from '../components/learning/QuizSection';
import Image from 'next/image';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onTopicSelect={setSelectedTopic} />
      
      <main className="ml-72 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <NotesSection topicId={selectedTopic} />
          <QuizSection topicId={selectedTopic} />
        </div>
      </main>
    </div>
  );
} 