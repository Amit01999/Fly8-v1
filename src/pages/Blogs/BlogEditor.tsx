import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = ({ value, onChange }) => (
  <ReactQuill
    theme="snow"
    value={value}
    onChange={onChange}
    modules={{
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['link', 'image'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['clean'],
      ],
    }}
    placeholder="Write your blog content here..."
  />
);

export default BlogEditor;
