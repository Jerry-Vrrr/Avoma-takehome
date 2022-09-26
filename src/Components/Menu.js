import React from 'react'
import './Menu.css';

export default function Menu({changeFeed}) {
  return (
    <div className='menu'>
      <button onClick={(e) => changeFeed(e)} value={'http://www.newyorker.com/feed/humor'}>Home</button>
      <button >Favorites</button>
    </div>
  )
}
