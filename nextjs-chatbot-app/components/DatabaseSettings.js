import React, { useState } from 'react';
import { updateDatabaseSettings } from '../utils/db';

const DatabaseSettings = () => {
  const [dbType, setDbType] = useState('');
  const [tableName, setTableName] = useState('');

  const handleDbTypeChange = (event) => {
    setDbType(event.target.value);
  };

  const handleTableNameChange = (event) => {
    setTableName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDatabaseSettings(dbType, tableName);
  };

  return (
    <div id="database-settings">
      <form onSubmit={handleSubmit}>
        <label>
          Database Type:
          <select value={dbType} onChange={handleDbTypeChange}>
            <option value="">--Please choose an option--</option>
            <option value="MySQL">MySQL</option>
            <option value="PostgreSQL">PostgreSQL</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Table Name:
          <input type="text" value={tableName} onChange={handleTableNameChange} />
        </label>
        <input type="submit" value="Update Settings" />
      </form>
    </div>
  );
};

export default DatabaseSettings;