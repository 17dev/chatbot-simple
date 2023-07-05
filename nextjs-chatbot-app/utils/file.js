```javascript
import fs from 'fs';
import path from 'path';

// Schema for uploaded files
export const File = {
  id: String,
  name: String,
  saved: Boolean,
};

// Function to upload a file
export const uploadFile = (file) => {
  const filePath = path.join(__dirname, '../uploads', file.name);
  fs.writeFileSync(filePath, file.data);
  return {
    id: filePath,
    name: file.name,
    saved: true,
  };
};

// Function to get all uploaded files
export const getUploadedFiles = () => {
  const dirPath = path.join(__dirname, '../uploads');
  const files = fs.readdirSync(dirPath);
  return files.map((file) => ({
    id: path.join(dirPath, file),
    name: file,
    saved: true,
  }));
};

// Function to delete a file
export const deleteFile = (fileId) => {
  fs.unlinkSync(fileId);
};
```