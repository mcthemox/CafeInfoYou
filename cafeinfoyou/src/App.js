import React from 'react';
import Blog from './apis/Blog';
import FilterBox from './components/FilterBox';
import KakaoMap from './components/KakaoMap';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <KakaoMap />
    </div>
  );
}
