import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import '../styles/sidebar.css';
import axios from 'axios'

export default function Search() {
  const searchContent = useRef()
  const dispatch = useDispatch()
  function sendTextValueHanler(){
    const inputVal = searchContent.current.value
    const searchdata = axios({
      method: "get",
      url: 'http://localhost:3001/searchPlace',
      params: {
        value: inputVal
      }
    }).then(()=>{
      if(searchdata.status !== 200) return alert('통신에러')
      const data = searchdata.data
      console.log("리절:",data);
      dispatch({type:'INP_VAL', text:data})
    })
    
    
  }
  return (
    <div>
      <input ref={searchContent} className='search' />
      <input  type='image' className='search-icon' src='/images/search.png'/>
      <button onClick={sendTextValueHanler}>검색</button>
    </div>
  )
}
