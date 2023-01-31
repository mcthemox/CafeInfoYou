import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/sidebar.css';
import axios from 'axios';

export default function Search() {
  const searchContent = useRef();
  const dispatch = useDispatch();
  function sendTextValueHandler() {
    const inputVal = searchContent.current.value;
    axios({
      method: 'get',
      url: 'http://localhost:3001/searchPlace',
      params: {
        value: inputVal
      }
    }).then((searchdata) => {
      if (searchdata.status !== 200) return alert('통신에러')
      const data = searchdata.data
      // console.log("리절:", data);
      dispatch({ type: 'INP_VAL', text: data })
    })
  }

  return (
    <div>
      <input ref={searchContent} className="search" />
      <input
        type="image"
        onClick={sendTextValueHandler}
        className="search-icon"
        src="/images/search.png"
      />
      {/* <button onClick={sendTextValueHandler}>검색</button> */}

    </div>
  );
}
