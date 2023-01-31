import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/map.css';
import axios from 'axios';
const { kakao } = window;

export default function KakaoMap() {
  // search.jsx에서 넘어온 내용
  const searchresult = useSelector((state) => state.cafe.text)
  // console.log("서치",searchresult)

  const mapContainer = useRef(null);
  const position = new kakao.maps.LatLng(37.5656, 126.9769);
  const mapOptions = {
    center: position,
    level: 4
  };
  const markerdata = [searchresult];

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);



    // console.log("마커",markerdata)

    const markerdata2 = [
      {
        place_name: '콜드스퀘어',
        x: 37.62197524055062,
        y: 127.16017523675508,
      },
      {
        place_name: '하남돼지집',
        x: 37.620842424005616,
        y: 127.1583774403176,
      },
      {
        place_name: '수유리우동',
        x: 37.624915253753194,
        y: 127.15122688059974,
      },
      {
        place_name: '맛닭꼬',
        laxt: 37.62456273069659,
        y: 127.15211256646381,
      },
    ]

    markerdata2.forEach((el) => {
      const Content = el.place_name

      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.x, el.y),
        //마커에 hover시 나타날 title
        title: Content

      });

    });


  }, [markerdata])




  // const [map, setMap] = useState(null);

  // useEffect(() => {
  //   const container = document.getElementById('map');
  //       const options = { center: new kakao.maps.LatLng(37.5656, 126.9769) };
  //       const kakaoMap = new kakao.maps.Map(container, options);
  //       setMap(kakaoMap);
  // },[])

  return <div id="map" ref={mapContainer}></div>;
}
