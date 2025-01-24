'use client';

import { useState } from 'react';

interface Progress {
  topic: string;
  completed: number;
  lastStudied: string;
}

export default function Dashboard() {
  const [progress] = useState<Progress[]>([
    {
      topic: 'JavaScript',
      completed: 75,
      lastStudied: '2024-01-23'
    },
    {
      topic: 'Python',
      completed: 40,
      lastStudied: '2024-01-22'
    },
    // Add more topics as needed
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-gray-800">Your Dashboard</h1>
          <p className="mt-4 text-gray-600">
            Track your progress and revisit topics you've studied.
          </p>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="container mx-auto mt-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {progress.map((item) => (
            <div key={item.topic} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800">{item.topic}</h2>
              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {item.completed}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                      style={{ width: `${item.completed}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Last studied: {new Date(item.lastStudied).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Completed JavaScript Quiz</p>
                <p className="text-sm text-gray-500">Score: 85%</p>
              </div>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Started Python Course</p>
                <p className="text-sm text-gray-500">In Progress</p>
              </div>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 