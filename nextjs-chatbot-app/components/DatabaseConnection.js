import React, { useState } from 'react';
import { connectDatabase } from '../utils/db';

const DatabaseConnection = ({ chatId }) => {
  const [selectedDatabase, setSelectedDatabase] = useState('');
  const [databases, setDatabases] = useState([]);

  const handleDatabaseChange = (event) => {
    setSelectedDatabase(event.target.value);
  };

  const handleConnectDatabase = async () => {
    try {
      await connectDatabase(chatId, selectedDatabase);
      alert('Database connected successfully');
    } catch (error) {
      alert('Failed to connect database');
    }
  };

  return (
    <div id="database-connection">
      <h2>Database Connection</h2>
      <select value={selectedDatabase} onChange={handleDatabaseChange}>
        {databases.map((database) => (
          <option key={database.id} value={database.id}>
            {database.name}
          </option>
        ))}
      </select>
      <button onClick={handleConnectDatabase}>Connect Database</button>
    </div>
  );
};

export default DatabaseConnection;