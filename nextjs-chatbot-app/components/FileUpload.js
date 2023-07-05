import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { uploadFile } from '../utils/file';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append('File', selectedFile);
    formData.append('id', uuidv4());

    try {
      await uploadFile(formData);
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  return (
    <div id="file-upload">
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
    </div>
  );
};

export default FileUpload;