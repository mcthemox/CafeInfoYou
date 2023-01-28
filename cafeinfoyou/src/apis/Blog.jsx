import React from 'react';
import axios from 'axios';

export default function Blog() {
  const blogTest = () => {
    axios({
      url: 'http://localhost:3001/blogSearch',
    });
  };
  return <button onClick={blogTest}>Blog</button>;
}
