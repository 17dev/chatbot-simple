import { useState, useEffect } from 'react';
import ChatListing from '../components/ChatListing';
import NewChat from '../components/NewChat';
import EditChat from '../components/EditChat';
import DeleteChat from '../components/DeleteChat';
import DatabaseConnection from '../components/DatabaseConnection';
import DatabaseSettings from '../components/DatabaseSettings';
import ConnectionManagement from '../components/ConnectionManagement';
import FileUpload from '../components/FileUpload';
import Chat from '../components/Chat';
import ChatDrawer from '../components/ChatDrawer';
import ConfigurationDrawer from '../components/ConfigurationDrawer';
import SideDrawer from '../components/SideDrawer';
import Responsive from '../components/Responsive';
import { loadSession } from '../utils/session';

export default function Home() {
  const [chatThreads, setChatThreads] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const loadedSession = loadSession();
    setSession(loadedSession);
    setChatThreads(loadedSession.chatThreads);
  }, []);

  return (
    <Responsive>
      <div className="flex flex-col h-screen">
        <ChatDrawer>
          <ChatListing chatThreads={chatThreads} setSelectedChat={setSelectedChat} />
          <NewChat setChatThreads={setChatThreads} />
          <EditChat selectedChat={selectedChat} setChatThreads={setChatThreads} />
          <DeleteChat selectedChat={selectedChat} setChatThreads={setChatThreads} />
        </ChatDrawer>
        <ConfigurationDrawer>
          <DatabaseConnection selectedChat={selectedChat} setChatThreads={setChatThreads} />
          <DatabaseSettings selectedChat={selectedChat} setChatThreads={setChatThreads} />
          <ConnectionManagement selectedChat={selectedChat} setChatThreads={setChatThreads} />
        </ConfigurationDrawer>
        <SideDrawer>
          <FileUpload />
        </SideDrawer>
        <Chat selectedChat={selectedChat} session={session} setSession={setSession} />
      </div>
    </Responsive>
  );
}