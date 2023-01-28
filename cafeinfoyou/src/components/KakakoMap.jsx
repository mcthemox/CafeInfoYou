import React from 'react';
import { useEffect } from 'react';


const {kakao} = window; //kakao api가 window 전역 객체에 들어가기 때문에 컴포넌트에 인지시키기 위해서 사용 

export default function KakaoMap() {
    useEffect(()=>{
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
}
const map = new kakao.maps.Map(container,options);//지도 생성 및 객체 리턴
},[])



    return (
    <div className="map" style="width:500px;height:400px;"></div>
)}
