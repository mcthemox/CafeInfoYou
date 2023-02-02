import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/map.css';
import axios from 'axios';
const { kakao } = window;

export default function KakaoMap() {
  // search.jsx에서 넘어온 내용

  const searchresult = useSelector((state) =>state.cafe.text)
  //console.log("서치",searchresult)
  const [position,setPosition] = useState(new kakao.maps.LatLng(37.5656, 126.9769))
 


  const mapContainer = useRef(null);
  const mapOptions = {
    center:position,
    level:4
  };
  useEffect(()=>{
    if(searchresult !== undefined){
      setPosition(new kakao.maps.LatLng(searchresult[0].y, searchresult[0].x))
      }
  },[searchresult])

  useEffect(()=> {
    const map = new kakao.maps.Map(mapContainer.current,mapOptions);
    
    

    if (searchresult !== undefined){
      
      
     searchresult.map((el) => {
      return(
    // 마커를 생성합니다
     new kakao.maps.Marker({
      //마커가 표시 될 지도
      map: map,
      //마커가 표시 될 위치
      position: new kakao.maps.LatLng(el.y, el.x),
      //마커에 hover시 나타날 title
      title: el.place_name,   
        })    
      )
    })
    
    }  
  },[mapOptions])


  


  // const [map, setMap] = useState(null);

  // useEffect(() => {
  //   const container = document.getElementById('map');
  //       const options = { center: new kakao.maps.LatLng(37.5656, 126.9769) };
  //       const kakaoMap = new kakao.maps.Map(container, options);
  //       setMap(kakaoMap);
  // },[])

  return <div id="map" ref={mapContainer}></div>;
}
