'use client';

import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

interface NotesSectionProps {
  topicId?: string;
}

export default function NotesSection({ topicId }: NotesSectionProps) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      if (!topicId) return;

      setIsLoading(true);
      setError(null);

      try {
        console.log('Loading content for topic:', topicId);
        const response = await fetch(`/mdn/${topicId.toUpperCase()}.md`);
        
        if (!response.ok) {
          console.error('Failed to load:', topicId, response.status);
          throw new Error('Failed to load content');
        }

        const text = await response.text();
        const html = marked(text);
        setContent(html);
      } catch (error) {
        console.error('Error loading content:', error);
        setError('Error loading content. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, [topicId]);

  if (!topicId) return null;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Notes</h2>
      
      {isLoading && (
        <div className="text-gray-600">Loading content...</div>
      )}

      {error && (
        <div className="text-red-600">
          <p>{error}</p>
          <p className="mt-2 text-sm">If the problem persists, contact support.</p>
        </div>
      )}

      {!isLoading && !error && content && (
        <div 
          className="prose prose-lg 
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
            prose-li:marker:text-gray-400
            w-full"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
} 