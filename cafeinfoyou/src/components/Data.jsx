import React from 'react'
import { useSelector } from 'react-redux';
import cafe from '../store/modules/cafe';

export default function Data() {

  // const cafecontents = useRef()
  const cafeinfo = useSelector((state) => state.cafe.text)
  console.log('데이터:', cafeinfo)

  const dd = 'as'
  // const datas = cafeinfo.documents
  const datas = [
    {
      dd
    },

  ]

  return (
    <>
      {cafeinfo == undefined ? <span>x</span> :
        cafeinfo.map((info, i) => {
          return <div className='contents-box'>{info.place_name}</div>
        })
      }

      {/* {datas.map((el, index) => {
        return (
          <div className='contents-box' key={index}>
            <h2>{el.searchresult}</h2>
            <h2>{el.name}</h2>
            <p>{el.address}</p>
          </div>
        )
      })} */}
    </>
  )
}
