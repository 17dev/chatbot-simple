import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DeleteChat = ({ chatId, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete(chatId);
      setIsDeleting(false);
    } catch (error) {
      console.error('Failed to delete chat:', error);
      setIsDeleting(false);
    }
  };

  return (
    <button
      id="delete-chat"
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting...' : 'Delete Chat'}
    </button>
  );
};

DeleteChat.propTypes = {
  chatId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteChat;