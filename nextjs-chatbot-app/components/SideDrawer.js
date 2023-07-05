import React, { useState } from 'react';
import FileUpload from './FileUpload';

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="file-upload">
      <button onClick={toggleDrawer}>
        {isOpen ? 'Close Side Drawer' : 'Open Side Drawer'}
      </button>
      {isOpen && (
        <div className="side-drawer">
          <FileUpload />
        </div>
      )}
    </div>
  );
};

export default SideDrawer;