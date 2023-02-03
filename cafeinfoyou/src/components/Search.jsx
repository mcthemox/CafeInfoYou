import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/sidebar.css';
import axios from 'axios';

export default function Search() {
  const filter = useSelector((state) => state.filter);

  const searchContent = useRef();
  const dispatch = useDispatch();

  async function sendTextValueHandler() {
    const inputVal = searchContent.current.value;
    let filterVal = '';
    if (filter.large) filterVal = ' 대형 카페';
    else if (filter.dessert) filterVal = ' 디저트 카페';
    else filterVal = '';

    // 카카오 지도 검색
    const searchdata = await axios({
      method: 'get',
      url: 'http://localhost:3001/searchPlace',
      params: {
        value: inputVal + filterVal,
      },
    });

    if (searchdata.status !== 200) return alert('통신에러');
    const data = searchdata.data.documents;

    if (filter.review) {
      // 블로그 리뷰수 검색
      const result = await getReview(data, inputVal);
      // 갯수 정렬
      let resultByTotal = result.sort((a, b) => b.total - a.total);
      // 순위대로 데이터 정렬
      let newData = [];
      resultByTotal.forEach((el) => {
        var i = data.findIndex((obj) => obj.place_name === el.name);
        newData.push(data[i]);
      });
      dispatch({ type: 'cafe/INP_VAL', text: newData });
    } else {
      dispatch({ type: 'cafe/INP_VAL', text: data });
    }
  }

  // 네이버 검색 api - 블로그 리뷰수 검색
  function getReview(data, inputVal) {
    let new_arr = [];
    return new Promise((resolve, reject) => {
      data.forEach(async (el, index) => {
        setTimeout(function () {
          axios({
            method: 'get',
            url: 'http://localhost:3001/blogSearch',
            params: {
              value: inputVal + el.place_name,
            },
          }).then((res) => {
            new_arr.push({ name: el.place_name, total: res.data.total });
            if (new_arr.length === data.length) resolve(new_arr);
          });
        }, 200 * (index + 1));
      });
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
        alt="검색"
      />
      {/* <button onClick={sendTextValueHandler}>검색</button> */}
    </div>
  );
}
