import React from 'react';
import Blog from './apis/Blog';
import KakaoMap from './components/KakaoMap';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="App">
      {/* <Blog /> */}
      <Sidebar />
      <KakaoMap />
    </div>
  );
}
