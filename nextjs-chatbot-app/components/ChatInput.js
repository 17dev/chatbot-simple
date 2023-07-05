import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSendMessage} className="flex items-center p-4">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        className="flex-grow rounded-lg border-gray-200 border p-2 mr-4"
        placeholder="Type your message here..."
      />
      <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2">
        Send
      </button>
    </form>
  );
};

export default ChatInput;