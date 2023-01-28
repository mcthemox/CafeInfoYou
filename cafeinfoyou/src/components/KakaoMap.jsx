import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/map.css';

const {kakao} = window

export default function KakaoMap() {
  const [map,setMap] = useState(null)

  useEffect(()=>{
    const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(37.5656, 126.9769) };
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);
  },[])

  
  
    return (

  <div id="map"></div>

  )
}
