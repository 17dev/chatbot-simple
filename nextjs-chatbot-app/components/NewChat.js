import { useState } from 'react';

const NewChat = ({ onCreateChat }) => {
  const [chatName, setChatName] = useState('');

  const handleCreateChat = () => {
    if (chatName) {
      onCreateChat(chatName);
      setChatName('');
    }
  };

  return (
    <div id="new-chat" className="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Enter chat name"
        value={chatName}
        onChange={(e) => setChatName(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2 mb-2"
      />
      <button
        onClick={handleCreateChat}
        className="bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Create Chat
      </button>
    </div>
  );
};

export default NewChat;