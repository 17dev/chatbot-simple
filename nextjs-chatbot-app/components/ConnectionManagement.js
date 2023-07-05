import React, { useState } from 'react';
import { manageConnection } from '../utils/db';

const ConnectionManagement = () => {
  const [connectionId, setConnectionId] = useState('');
  const [connectionType, setConnectionType] = useState('');
  const [tableName, setTableName] = useState('');

  const handleEdit = async () => {
    try {
      await manageConnection(connectionId, connectionType, tableName);
      alert('Connection updated successfully');
    } catch (error) {
      alert('Failed to update connection');
    }
  };

  const handleDelete = async () => {
    try {
      await manageConnection(connectionId);
      alert('Connection deleted successfully');
    } catch (error) {
      alert('Failed to delete connection');
    }
  };

  return (
    <div id="connection-management">
      <h2>Manage Connection</h2>
      <input
        type="text"
        placeholder="Connection ID"
        value={connectionId}
        onChange={(e) => setConnectionId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Connection Type"
        value={connectionType}
        onChange={(e) => setConnectionType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Table Name"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
      />
      <button onClick={handleEdit}>Edit Connection</button>
      <button onClick={handleDelete}>Delete Connection</button>
    </div>
  );
};

export default ConnectionManagement;