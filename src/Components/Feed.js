import React from 'react'
import './Feed.css';



export default function Feed({title, description, link}) {
  return (
    <div className='feed'>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link}>Full Article</a>
      </div>
    </div>
  )
}
