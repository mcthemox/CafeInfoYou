import React from 'react'
import { useSelector } from 'react-redux';
import cafe from '../store/modules/cafe';
import '../styles/sidebar.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Iframe from 'react-iframe'
// import { isMobile } from 'react-device-detect';

export default function Data() {

  const cafeinfo = useSelector((state) => state.cafe.text)
  const [img, setImg] = useState([]);

  useEffect(() => {
    initialize();
  }, cafeinfo)

  function initialize() {
    if (cafeinfo == undefined) return;
    let imgArr = []

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
          // console.log(searchdata.data.items[0].link);
          imgArr.push(searchdata.data.items[0].link);
          setImg([...imgArr])
        })
      }, 180 * (i + 1));
    })

  }

  return (
    <>
      {img.length}
      {cafeinfo == undefined ? <span></span> :
        cafeinfo.map((info, index) => {
          let url = info.place_url;
          // if (isMobile) url = info.place_url.slice(0, 26) + '/m' + info.place_url.slice(26);

          return (
            <div className='contents-box' key={index}>
              <a className='hvr-grow' href={url} target='_blank'>
                {info.place_name}
              </a>
              <br />
              <div style={{ fontSize: '12px' }}>
                {info.phone}
              </div>
              <br />
              {img.length > 0 && (
                <img style={{ borderRadius: '4px', width: '230px', height: '120px' }} src={img[index]}></img>
              )}
            </div>
          )
        })
      }
    </>
  )
}
