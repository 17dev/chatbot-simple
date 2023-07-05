Shared Dependencies:

1. Exported Variables:
   - `OPENAI_API_KEY`: The API key for OpenAI.
   - `DATABASE_URL`: The URL for the database connection.

2. Data Schemas:
   - `ChatThread`: Schema for chat threads, including thread ID, name, and associated database.
   - `DatabaseConnection`: Schema for database connections, including connection ID, type (MySQL, PostgreSQL, etc.), and table names.
   - `File`: Schema for uploaded files, including file ID, name, and saved status.

3. ID Names of DOM Elements:
   - `chat-listing`: ID for the chat listing section.
   - `new-chat`: ID for the new chat creation section.
   - `edit-chat`: ID for the chat editing section.
   - `delete-chat`: ID for the chat deletion section.
   - `database-connection`: ID for the database connection section.
   - `database-settings`: ID for the database settings section.
   - `connection-management`: ID for the connection management section.
   - `file-upload`: ID for the file upload section.

4. Message Names:
   - `CREATE_CHAT`: Message name for creating a new chat.
   - `EDIT_CHAT`: Message name for editing an existing chat.
   - `DELETE_CHAT`: Message name for deleting a chat.
   - `CONNECT_DATABASE`: Message name for connecting a chat to a database.
   - `UPDATE_DATABASE_SETTINGS`: Message name for updating database settings.
   - `MANAGE_CONNECTION`: Message name for managing database connections.
   - `UPLOAD_FILE`: Message name for uploading a file.

5. Function Names:
   - `createChat()`: Function to create a new chat.
   - `editChat()`: Function to edit an existing chat.
   - `deleteChat()`: Function to delete a chat.
   - `connectDatabase()`: Function to connect a chat to a database.
   - `updateDatabaseSettings()`: Function to update database settings.
   - `manageConnection()`: Function to manage database connections.
   - `uploadFile()`: Function to upload a file.
   - `getChatHistory()`: Function to retrieve chat history.
   - `saveSession()`: Function to save chat session.
   - `loadSession()`: Function to load chat session.