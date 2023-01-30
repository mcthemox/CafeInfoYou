import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/map.css';
import axios from 'axios'
const { kakao } = window;


export default function KakaoMap() {

  // search.jsx에서 넘어온 검색어
  const saerchinput = useSelector((state) =>state.cafe.text)
  console.log(saerchinput)
  const markerdata = []
  axios({
    method: "post",
    url: 'http://localhost:3001/searchPlace',
    data: {
      value: saerchinput
    }
  }).then((result)=>{
    console.log(result);
    
  })

  const mapContainer = useRef(null);
  const position = new kakao.maps.LatLng(37.5656, 126.9769)
  const mapOptions = {
    center:position,
    level:4
  };


  useEffect(()=> {
    const map = new kakao.maps.Map(mapContainer.current,mapOptions);

    
  const markerdata = [
    {
      title: "콜드스퀘어",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "하남돼지집",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "수유리우동",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "맛닭꼬",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
  ]
  
  var marker  = markerdata.forEach((el) => {
    const Content = `<span>${el.title}</span>`

    // 마커를 생성합니다
    new kakao.maps.Marker({
      //마커가 표시 될 지도
      map: map,
      //마커가 표시 될 위치
      position: new kakao.maps.LatLng(el.lat, el.lng),
      //마커에 hover시 나타날 title
      title: Content
      
    });

  });

  
  },[])

  



  // const [map, setMap] = useState(null);

  // useEffect(() => {
  //   const container = document.getElementById('map');
  //       const options = { center: new kakao.maps.LatLng(37.5656, 126.9769) };
  //       const kakaoMap = new kakao.maps.Map(container, options);
  //       setMap(kakaoMap);
  // },[])


  return <div id="map" ref={mapContainer}></div>;
}
