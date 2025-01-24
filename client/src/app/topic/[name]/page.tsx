'use client';

import { useParams } from 'next/navigation';
import NotesSection from '@/components/learning/NotesSection';
import QuizSection from '@/components/learning/QuizSection';

export default function TopicPage() {
  const params = useParams();
  const name = params.name as string;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Topic Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-gray-800">{name.toUpperCase()} Study Guide</h1>
          <p className="mt-4 text-gray-600">
            Master {name} with our comprehensive learning materials.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-6 px-4">
        <div className="space-y-6">
          {/* Notes Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Notes</h2>
            <p className="text-gray-600 mb-6">
              This section contains beginner, intermediate, and advanced notes for {name}.
            </p>
            <NotesSection topicId={name} />
          </div>

          {/* Quiz Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Practice Quiz</h2>
            <p className="text-gray-600 mb-6">Test your knowledge with these questions:</p>
            <QuizSection />
          </div>
        </div>
      </div>
    </div>
  );
} 