import React from 'react'
import '../styles/sidebar.css';

export default function Search() {
  return (
    <div>
      <input className='search' />
      <input type='image' className='search-icon' src='/images/search.png'/>
    </div>
  )
}
