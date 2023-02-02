import React from 'react'
import { useSelector } from 'react-redux';
import cafe from '../store/modules/cafe';
import '../styles/sidebar.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Data() {

  const cafeinfo = useSelector((state) => state.cafe.text)
  const [img, setImg] = useState([]);

  useEffect(() => {
    initialize()
  }, [])


  function initialize() {
    if (cafeinfo == undefined) return;
    let imgArr = []

    cafeinfo.map((info, i) => {
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
        console.log(searchdata)
      })

    })

    setImg(imgArr)

  }
  console.log('데이터:', cafeinfo)


  // if (cafeinfo !== undefined) {
  //   axios({
  //     method: "get",
  //     url: 'http://localhost:3001/imageSearch',
  //     params: {
  //       value: cafeinfo[0].place_name
  //     }
  //   }).then((searchdata) => {
  //     if (searchdata.status !== 200) return alert('통신에러')
  //     console.log(searchdata.data.items[0].link);
  //   })
  // }




  return (
    <>
      {img.length}
      {cafeinfo == undefined ? <span></span> :
        cafeinfo.map((info, index) => {
          return (
            <div className='contents-box' key={index}>

              <a className='hvr-grow' href={info.place_url} target='_blank'>

                {info.place_name}
              </a>
              <br />
              <br />
              <div style={{ fontSize: '14px' }}>
                {info.phone}
              </div>
              {img.length > 0 && (
                <img style={{ width: '200px' }} src={img[index]}></img>
              )}
            </div>
          )
        })
      }
    </>
  )
}
