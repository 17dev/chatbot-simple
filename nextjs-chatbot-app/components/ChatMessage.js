import React from 'react';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div
        className={`py-2 px-4 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;