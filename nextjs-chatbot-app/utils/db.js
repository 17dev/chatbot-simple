```javascript
import { Client } from 'pg';

const DATABASE_URL = process.env.DATABASE_URL;

export const DatabaseConnection = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export const connectDatabase = async () => {
  try {
    await DatabaseConnection.connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error(`Failed to connect to the database. ${error}`);
  }
};

export const disconnectDatabase = async () => {
  try {
    await DatabaseConnection.end();
    console.log('Database disconnected successfully');
  } catch (error) {
    console.error(`Failed to disconnect from the database. ${error}`);
  }
};

export const executeQuery = async (query, params) => {
  try {
    const result = await DatabaseConnection.query(query, params);
    return result.rows;
  } catch (error) {
    console.error(`Failed to execute query. ${error}`);
  }
};
```