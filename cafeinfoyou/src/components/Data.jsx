import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/sidebar.css';
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';


export default function Data() {
  const cafeinfo = useSelector((state) => state.cafe.text);
  const [img, setImg] = useState([]);

  useEffect(() => {
    initialize();
  }, cafeinfo)


  function initialize() {
    if (cafeinfo == undefined) return;
    let imgArr = [];

    cafeinfo.map((info, i) => {
      setTimeout(function () {
        axios({
          method: "get",
          url: 'http://localhost:3001/imageSearch',
          params: {
            value: cafeinfo[i].place_name
          }
        }).then((searchdata) => {
          if (searchdata.status !== 200) return alert('통신에러')
          console.log(cafeinfo);
          imgArr.push(searchdata.data.items[0].link);
          setImg([...imgArr])
        })
      }, 400 * (i + 1));
    })
  }

  return (
    <>
      <div className='kakao-page'>
        <iframe src="" name="iframe" width="100%" height="100%" frameborder='0'></iframe>
      </div>
      {cafeinfo == undefined ? (
        <span></span>
      ) : (
        cafeinfo.map((info, index) => {
          let url = info.place_url;
          url = info.place_url.slice(0, 26) + '/m' + info.place_url.slice(26);

          return (
            <div className='contents-box' key={index}>
              <a className='hvr-grow' style={{
                marginBottom: '5px'

              }} href={url} target='iframe'>
                {info.place_name}
              </a>
              <br />
              <div style={{ fontSize: '13px' }}>
                {info.road_address_name}
              </div>
              <div style={{ marginBottom: '4px', fontSize: '12px' }}>
                {info.phone}
              </div>
              {img.length > 0 && (
                <img style={{ borderRadius: '4px', width: '243px', height: '120px' }} src={img[index]} alt="이미지 없음"></img>
              )}
            </div>
          );
        })
      )}
    </>
  );
}
