import React from 'react'
import { useSelector } from 'react-redux';
import cafe from '../store/modules/cafe';
import '../styles/sidebar.css';
import axios from 'axios'

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
  // const [dataArr, setDataArr] = useState([])
  //   // axios({
  //   //   method: "get",
  //   //   url: 'http://localhost:3001/imageSearch',
  //   //   params: {
  //   //     value: cafeinfo.documents[0].place_name
  //   //   }
  //   // }).then((searchdata) => {
  //   //   if (searchdata.status !== 200) return alert('통신에러')
  //   //   console.log(searchdata)
      
  //   //   setDataArr(search)

  //   // })

  return (
    <>
      {cafeinfo == undefined ? <span></span> :
        cafeinfo.map((info, index) => {
          return (
            <div className='contents-box' key={index}>
              <a className='hvr-grow' href={info.place_url}>
                {info.place_name}
              </a>
              <br />
              <br />
              <div style={{ fontSize: '14px' }}>
                {info.phone}
              </div>
            </div>
          )

        })
      }
    </>
  )
}
