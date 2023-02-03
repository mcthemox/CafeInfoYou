import React from 'react';
import { useRef } from 'react';
import '../styles/sidebar.css';
import FilterBox from './FilterBox';
import Search from './Search';
import SidebarContents from './SidebarContents';

export default function Sidebar() {
  const sidebar = useRef();
  const mainhidebutton = useRef();


  const hidebutton = () => {
    sidebar.current.style.display = 'none';
    mainhidebutton.current.style.display = 'none';
  };
  const openbutton = () => {
    sidebar.current.style.width = '335px';
    sidebar.current.style.display = '';
    mainhidebutton.current.style.display = '';
  };
  return (
    <div className="sidebar-container">
      <div ref={sidebar} className="sidebar" style={{ width: '335px' }}>
        <Search />
        <FilterBox />
        <SidebarContents />
      </div>
      <img
        src="/images/button1.png"
        ref={mainhidebutton}
        className="close-sidebar-button"
        onClick={hidebutton}
        alt="button"
      ></img>
      <img
        src="/images/button2.png"
        className="open-sidebar-button"
        onClick={openbutton}
        alt="button"
      ></img>
    </div>
  );
}
