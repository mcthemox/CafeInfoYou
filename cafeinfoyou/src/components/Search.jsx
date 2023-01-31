import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/sidebar.css';
import axios from 'axios';
import { useState } from 'react';

export default function Search() {
  const searchResult = useSelector((state) => state.cafe.text);
  const filter = useSelector((state) => state.filter);
  const [reviewTotal, setReviewTotal] = useState([]);
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

      if (searchdata.status !== 200) return alert('통신에러');
      const data = searchdata.data;
      console.log('리절:', data);
      dispatch({ type: 'INP_VAL', text: data });
      if (filter.review) reviewChecked();
    });
  }

  function reviewChecked() {
    console.log('---reviewCheck--');
    axios({
      method: 'get',
      url: 'http://localhost:3001/blogSearch',
      params: {
        value: searchResult.documents[0].place_name,
      },
    }).then((res) => {
      setReviewTotal(reviewTotal.concat(res.data.total));
      console.log(reviewTotal);
    });
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
