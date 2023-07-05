import React, { useState, useEffect } from 'react';
import { ChatThread } from './ChatThread';

export const ChatListing = () => {
  const [chatThreads, setChatThreads] = useState([]);

  useEffect(() => {
    // Fetch chat threads from the server or local storage
    // This is a placeholder and should be replaced with actual data fetching
    const fetchedChatThreads = [
      { id: '1', name: 'Chat 1', database: 'MySQL' },
      { id: '2', name: 'Chat 2', database: 'PostgreSQL' },
    ];
    setChatThreads(fetchedChatThreads);
  }, []);

  return (
    <div id="chat-listing" className="overflow-y-auto h-full">
      <h2 className="text-lg font-semibold mb-4">Chat Threads</h2>
      {chatThreads.map((thread) => (
        <ChatThread key={thread.id} thread={thread} />
      ))}
    </div>
  );
};