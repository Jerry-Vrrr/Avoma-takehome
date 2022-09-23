import React from 'react'
import './Sidebar.css';
import Menu from './Menu';
import Feedlist from './Feedlist';

export default function Sidebar() {
  return (
    <div className='sidebar'>Feeds
      <Menu />
      <Feedlist />
    </div>
    
  )
}
