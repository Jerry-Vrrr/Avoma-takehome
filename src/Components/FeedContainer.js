import React from 'react'
import './FeedContainer.css';
import Feed from './Feed';


export default function FeedContainer({items, setRssUrl, rssUrl, getRss}) {
  console.log(items)
  const feeds = items.map((item) => {
    return (
      <Feed 
            title={item.title}
            description={item.description}
            link={item.link}
      />
    );
  })
  return (
    <div className='feed-container'>FeedContainer
    <form onSubmit={getRss}>
        <div>
          <label> rss url</label>
          <br />
          <input onChange={(e) => setRssUrl(e.target.value)} value={rssUrl} />
        </div>
        <input type="submit" />
      </form>
      {feeds}
    </div>
  )
}
