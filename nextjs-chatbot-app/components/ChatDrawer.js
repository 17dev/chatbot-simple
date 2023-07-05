import React from 'react';
import ChatListing from './ChatListing';
import NewChat from './NewChat';
import EditChat from './EditChat';
import DeleteChat from './DeleteChat';
import DatabaseConnection from './DatabaseConnection';

const ChatDrawer = () => {
  return (
    <div className="chat-drawer">
      <ChatListing />
      <NewChat />
      <EditChat />
      <DeleteChat />
      <DatabaseConnection />
    </div>
  );
};

export default ChatDrawer;