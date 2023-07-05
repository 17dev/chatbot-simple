import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import { getChatHistory } from '../utils/session';

const ChatThread = ({ threadId }) => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const history = getChatHistory(threadId);
    setChatHistory(history);
  }, [threadId]);

  return (
    <div id="chat-thread">
      {chatHistory.map((chat, index) => (
        <Chat key={index} chat={chat} />
      ))}
    </div>
  );
};

export default ChatThread;