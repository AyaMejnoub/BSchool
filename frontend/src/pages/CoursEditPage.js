import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import axios from 'axios';
import parse from 'html-react-parser';
import React, { useState } from 'react';
import Sidebar from '../layout/ChapterBar';


function CoursEditPage() {
  const editorstyle = {
    position: 'absolute',
    left: '270px',
    display: 'flex'
  }
  const displaystyle = {
    flex: 1,
    margin: '50px',
  }
  const [text, setText] = useState('')

  return (
    <div style={editorstyle}>
        <div className="sidebar">
        <Sidebar />
        </div>
      <div style={displaystyle}>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Contenu initial</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            setText(data)
            //Saving content
            axios.post('/save-content', { content: editor.getData() })
              .then(response => {
                console.log('Content saved successfully');
              })
              .catch(error => {
                console.error('Error saving content:', error);
              });

          }}
        />
        
      </div>
      <div style={displaystyle}>
        <h2>visualisation de contenu</h2>
        <p>{parse(text)}</p>
      </div>
    </div>
  );

}

export default CoursEditPage;