import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/sidebar.css';
import axios from 'axios';

export default function Search() {
  const filter = useSelector((state) => state.filter);
  let review = [];
  const searchContent = useRef();
  const dispatch = useDispatch();

  function sendTextValueHandler() {
    const inputVal = searchContent.current.value;
    axios({
      method: 'get',
      url: 'http://localhost:3001/searchPlace',
      params: {
        value: inputVal,
      },
    }).then((searchdata) => {
      if (searchdata.status !== 200) return alert('통신에러');
      const data = searchdata.data.documents;
      console.log('리절:', data);
      dispatch({ type: 'cafe/INP_VAL', text: data });
      if (filter.review) reviewChecked(data);
    });
  }

  function reviewChecked(data) {
    console.log('---reviewCheck--');

    data.forEach((el, index) => {
      setTimeout(function () {
        axios({
          method: 'get',
          url: 'http://localhost:3001/blogSearch',
          params: {
            value: el.place_name,
          },
        }).then((res) => {
          review.push({ name: el.place_name, total: res.data.total });
        });
      }, 100 * (index + 1));
    });

    console.log('totalout', review);

    // let reviewByTotal = review.sort((a, b) => a.total - b.total);
    // let newData = [];
    // reviewByTotal.forEach((el) => {
    //   var i = data.indexOf(el.total);
    //   newData.push(data[i]);
    // });
    // dispatch({ type: 'cafe/REVIEW', text: newData });
  }
  return (
    <div>
      <input ref={searchContent} className="search" />
      <input
        type="image"
        onClick={sendTextValueHandler}
        className="search-icon"
        src="/images/search.png"
        alt="검색"
      />
      {/* <button onClick={sendTextValueHandler}>검색</button> */}
    </div>
  );
}
