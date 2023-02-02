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
      
      
     searchresult.forEach((el) => {
      
    // 마커를 생성합니다
    let marker =    new kakao.maps.Marker({
      //마커가 표시 될 지도
      map: map,
      //마커가 표시 될 위치
      position: new kakao.maps.LatLng(el.y, el.x),
      title: el.place_name


        })    
          let content =
          '<div class="content">' + 
          '<div class="wrap">' + 

            `${el.place_name}` + 
            '</div>' +
            '</div>';
            

        let customOverlay = new kakao.maps.InfoWindow({
          position: new kakao.maps.LatLng(el.y, el.x),
          content: content
        })

        // kakao.maps.event.addListener(marker,'mouseover', function(){
         
        //     customOverlay.setMap(map)
        //   })
        
       // kakao.maps.event.addListener(marker,'mouseout', function(){
        //  setTimeout(function(){
         //   customOverlay.setMap()
         // })
       // })
        kakao.maps.event.addListener(marker, 'click', function(mouseEvent) {        
          window.open(el.place_url);
      });
  
   
   
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
