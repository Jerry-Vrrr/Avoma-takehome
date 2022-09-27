import React from 'react'
import './Feedlist.css';


export default function Feedlist({changeFeed}) {

  return (
    <div className='feedlist'>
      <label>Technology 👾</label>
      <button onClick={(e) => changeFeed(e)} value={'http://www.npr.org/rss/rss.php?id=1019'}>NPR Tech</button>
      <button onClick={(e) => changeFeed(e)} value={'http://feeds.nytimes.com/nyt/rss/Technology'}>NY Times Tech</button>
      <button onClick={(e) => changeFeed(e)} value={'http://feeds.wired.com/wired/index'}>Wired</button>
      <label>News 🤦🏾‍♀️</label>
      <button onClick={(e) => changeFeed(e)} value={'http://feeds.nytimes.com/nyt/rss/HomePage'}>NY Times News</button>
      <button onClick={(e) => changeFeed(e)} value={'http://www.npr.org/rss/rss.php?id=1001'}>NPR News</button>
      <button onClick={(e) => changeFeed(e)} value={'http://www.pbs.org/wgbh/nova/rss/nova.xml'}>Nova</button>
      <label>Entertainment 🦄</label>
      <button onClick={(e) => changeFeed(e)} value={'http://www.npr.org/rss/rss.php?id=1045'}>NPR Movies</button>
      <button onClick={(e) => changeFeed(e)} value={'http://www.npr.org/rss/rss.php?id=1008'}>NPR Arts</button>
      <button onClick={(e) => changeFeed(e)} value={'http://www.newyorker.com/feed/humor'}>New Yorker</button>
    </div>
  )
}
