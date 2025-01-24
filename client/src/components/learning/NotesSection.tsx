'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { marked } from 'marked';

interface NotesSectionProps {
  topicId: string | undefined;
}

const NotesSection: React.FC<NotesSectionProps> = ({ topicId }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    async function loadContent() {
      if (!topicId) {
        setContent(`
          <div class="text-gray-600">
            <p>Select a topic from the sidebar to view detailed notes and documentation.</p>
            <p class="mt-4">Each topic includes:</p>
            <ul class="list-disc ml-6 mt-2 space-y-2">
              <li>Comprehensive overview</li>
              <li>Technical documentation</li>
              <li>Best practices</li>
              <li>Code examples</li>
            </ul>
          </div>
        `);
        return;
      }

      try {
        console.log('Loading content for topic:', topicId);
        const response = await fetch(`/api/content/${topicId}`);
        if (!response.ok) {
          throw new Error('Failed to load content');
        }
        const data = await response.text();
        const htmlContent = marked(data);
        setContent(htmlContent);
      } catch (error) {
        console.error('Error loading content:', error);
        setContent(`
          <div class="text-red-600">
            <p>Error loading content. Please try again.</p>
            <p class="mt-2 text-sm">If the problem persists, contact support.</p>
          </div>
        `);
      }
    }

    loadContent();
  }, [topicId]);

  // Only show content if a topic is selected
  if (!topicId) {
    return null; // Return nothing when no topic is selected
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Notes</h2>
      <div 
        className="prose prose-lg max-w-none
          prose-headings:text-gray-800 
          prose-headings:font-semibold 
          prose-p:text-gray-600 
          prose-p:leading-relaxed
          prose-a:text-blue-600 
          prose-a:no-underline hover:prose-a:underline
          prose-code:text-gray-800
          prose-code:bg-gray-100
          prose-code:px-1
          prose-code:py-0.5
          prose-code:rounded
          prose-pre:bg-gray-900
          prose-pre:text-gray-100
          prose-ul:text-gray-600
          prose-li:marker:text-gray-400"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default NotesSection; 