import Blog from './apis/Blog';
import './App.css';
import React from 'react';
import KakaoMap from './components/KakakoMap';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="App">
      <Blog />
      <Sidebar />
      <KakaoMap />
    </div>
  );
}
