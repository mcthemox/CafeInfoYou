import React from 'react';
import axios from 'axios';

export default function Blog() {
  const test = () => {
    axios({
      method: 'get',
      url: 'https://seoul.openapi.redtable.global/api/food/img?serviceKey=ZN5LgzD8Q3Eb1d8PMCsZ99M5KRhKIVC5JiCKQBMqf4jdJpvK4AKnAB1KKqPg8prm',
    }).then((res) => {
      console.log(res.data);
    });
  };
  return <button onClick={test}>Blog</button>;
}
