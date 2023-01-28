import React from 'react';
import KakaoMap from './components/KakaoMap';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div>
      <Sidebar />
      <KakaoMap />
    </div>
  );
}
