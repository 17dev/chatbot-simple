import React, { useState } from 'react';
import DatabaseSettings from './DatabaseSettings';
import ConnectionManagement from './ConnectionManagement';

const ConfigurationDrawer = () => {
  const [selectedTab, setSelectedTab] = useState('DatabaseSettings');

  const renderTab = () => {
    switch (selectedTab) {
      case 'DatabaseSettings':
        return <DatabaseSettings />;
      case 'ConnectionManagement':
        return <ConnectionManagement />;
      default:
        return <DatabaseSettings />;
    }
  };

  return (
    <div className="configuration-drawer">
      <div className="tab-selector">
        <button
          className={`tab-button ${selectedTab === 'DatabaseSettings' ? 'active' : ''}`}
          onClick={() => setSelectedTab('DatabaseSettings')}
        >
          Database Settings
        </button>
        <button
          className={`tab-button ${selectedTab === 'ConnectionManagement' ? 'active' : ''}`}
          onClick={() => setSelectedTab('ConnectionManagement')}
        >
          Connection Management
        </button>
      </div>
      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default ConfigurationDrawer;