import React from 'react'
import './Menu.css';

export default function Menu({changeFeed, setItems, favorites, setIsOpen}) {

  const showFavorites = (e) => {
    e.preventDefault()
    return favorites.length ? setIsOpen(true) : alert('No Favorites')
  }
  
  return (
    <div className='menu'>
      <button onClick={(e) => changeFeed(e)} value={'http://www.newyorker.com/feed/humor'}>Home</button>
      <button onClick={(e) => showFavorites(e)} >Favorites</button>
    </div>
  )
}
