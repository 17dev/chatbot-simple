import React, { useState, useEffect } from 'react';
import ChatThread from './ChatThread';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { getChatHistory, saveSession, loadSession } from '../utils/session';
import { OPENAI_API_KEY } from '../.env';
import openai from '../utils/openai';

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const session = loadSession();
    if (session) {
      setChatHistory(session.chatHistory);
      setCurrentChat(session.currentChat);
    }
  }, []);

  const handleSelectChat = (chat) => {
    setCurrentChat(chat);
    const history = getChatHistory(chat);
    setChatHistory(history);
  };

  const handleSendMessage = async (message) => {
    const response = await openai.generateResponse(OPENAI_API_KEY, message);
    const newMessage = {
      user: 'bot',
      text: response,
      timestamp: new Date().getTime(),
    };
    setChatHistory([...chatHistory, newMessage]);
    saveSession({ chatHistory: [...chatHistory, newMessage], currentChat });
  };

  return (
    <div className="chat-container">
      <ChatThread onSelectChat={handleSelectChat} currentChat={currentChat} />
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;