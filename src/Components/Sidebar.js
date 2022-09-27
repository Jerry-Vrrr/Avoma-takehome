import React from 'react'
import './Sidebar.css';
import Menu from './Menu';
import Feedlist from './Feedlist';

export default function Sidebar({getRss, setCurrentFeed, setItems, favorites, setIsOpen, setFavorites}) {

  const changeFeed = (e) => {
    e.preventDefault()
    getRss(e.target.value)
    setCurrentFeed(e.target.innerText)
    setIsOpen(false)
  }

  return (
    <div className='sidebar'>
      <Menu 
      getRss={getRss}
      setCurrentFeed={setCurrentFeed}
      changeFeed={changeFeed}
      setItems={setItems}
      favorites={favorites}
      setFavorites={setFavorites}
      setIsOpen={setIsOpen}
      />
      <Feedlist 
      getRss={getRss}
      setCurrentFeed={setCurrentFeed}
      setIsOpen={setIsOpen}
      changeFeed={changeFeed}
      />
    </div>
    
  )
}
