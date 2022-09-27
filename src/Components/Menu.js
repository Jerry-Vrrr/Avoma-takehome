import React from 'react'
import './Menu.css';
import Cookies from 'js-cookie';

export default function Menu({changeFeed, favorites, setIsOpen, setFavorites}) {

  const showFavorites = (e) => {
    e.preventDefault()
    setFavorites(Cookies.get())
    console.log(favorites)
    setIsOpen(true)
    // return favorites.length ? setIsOpen(true) : alert('No Favorites')
  }
  
  return (
    <div className='menu'>
      <button onClick={(e) => changeFeed(e)} value={'http://www.newyorker.com/feed/humor'}>Home</button>
      <button className='favorites' onClick={(e) => showFavorites(e)} >Favorites</button>
    </div>
  )
}
