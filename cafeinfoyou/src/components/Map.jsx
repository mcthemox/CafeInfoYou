import React from 'react'
import { useEffect, useRef } from 'react';
import './map.css';


export default function Map() {
    const mapElement = useRef(null);


  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769); //지도의 초기 중심 좌표
    const mapOptions: naver.maps.MapOptions = {
      center: location, //지도의 조기 중심
      zoom: 13, // 지도의 초기 줌 상태
      zoomControl: false, // 줌 컨트롤의 표시 여부
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });

    var markerList = [];
    naver.maps.Event.addListener(map, 'click', function (e) {
      var marker = new naver.maps.Marker({
        position: e.coord,
        map: map
      });

      markerList.push(marker);
    });


    //   $("#tile-transition").on("click", function(e) {
    //     e.preventDefault();

    //     if (map.getOptions("tileTransition")) {
    //         map.setOptions("tileTransition", false); //타일 fadeIn 효과 끄기

    //         $(this).removeClass("control-on");
    //     } else {
    //         map.setOptions("tileTransition", true); //타일 fadeIn 효과 켜기
    //         $(this).addClass("control-on");
    //     }
    // });   

    
  }, []);
  return (<div className='map' ref= {mapElement}/>
  );
}
