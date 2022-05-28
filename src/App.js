import React, { useRef, useEffect} from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import './App.css';

const Input = styled('input')({
  display: 'none',
});

function App() {
  const viewer = useRef(null);
  const input = document.getElementById('file_upload');
  input.addEventListener('change', () => {
    console.log('1')
  });

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: 'test.pdf',
      },
      viewer.current,
    ).then(instance => {
      input.addEventListener('change', () => {
        // Get the file from the input
        const file = input.files[0];
        console.log('2')
        instance.UI.loadDocument(file, { filename: file.name });
      });

      const { documentViewer } = instance.Core;
      documentViewer.addEventListener('documentLoaded', () => {
        // perform document operations
        console.log('loaded')
      });
    });
  }, []);

  return (
    <div className="MyComponent">
      <label htmlFor="file_upload">
        <Input accept=".pdf" id="file_upload" name="file_upload" type="file" />
        {/* <Button variant="contained" component="span">
          Upload
        </Button> */}
      </label>
      <div className="header">Simplify</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
}

export default App;
