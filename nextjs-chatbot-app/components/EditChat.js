import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditChat = ({ chat, onEdit }) => {
  const [newName, setNewName] = useState(chat.name);

  const handleEdit = () => {
    onEdit(chat.id, newName);
    setNewName('');
  };

  return (
    <div id="edit-chat">
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter new chat name"
      />
      <button onClick={handleEdit}>Edit Chat</button>
    </div>
  );
};

EditChat.propTypes = {
  chat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditChat;