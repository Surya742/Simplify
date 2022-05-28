import React, { useRef, useEffect} from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import OutlineBtn from './components/OutlineBtn'
import TextArea from './components/TextArea'
import './App.css';

const Input = styled('input')({
  display: 'block',
});

function App() {
  const viewer = useRef(null);
  const input = document.getElementById('file_upload');
  // input.addEventListener('change', () => {
  //   console.log('1')
  // });

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
      <div className="header">Simplify</div>
      {/* <label htmlFor="file_upload">
        <Input accept=".pdf" id="file_upload" name="file_upload" type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label> */}
      <div className="webviewer" ref={viewer}></div>
      <div className="textarea"><TextArea width={1000} /></div>
      <div className="summary"><OutlineBtn title='Summarize' /></div>
      <div className="clear"><OutlineBtn title='Clear' /></div>
    </div>
  );
}

export default App;
