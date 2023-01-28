import React from 'react';
import { useRef } from 'react';
import '../styles/sidebar.css';
import SidebarContents from './SidebarContents';
// import SidebarContents from './SidebarContents';

export default function Sidebar() {
    const sidebar = useRef()
    const hidebutton = () => {
        sidebar.current.style.display = 'none';
    }
    const openbutton = () => { 
        sidebar.current.style.width = '300px';
        sidebar.current.style.display = '';
    }
    return (
        <div className='sidebar-container'>
            <div ref={sidebar} className='sidebar' style={{ width: '300px' }}>
                <SidebarContents />
                
                <img src='/images/button.png' className='close-sidebar-button' onClick={hidebutton} alt='button' ></img>
            </div>
            <img src='/images/button.png' className='open-sidebar-button' onClick={openbutton} alt='button' ></img>
        </div>
)}
