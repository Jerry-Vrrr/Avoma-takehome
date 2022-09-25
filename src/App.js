import './App.css';
import FeedContainer from './Components/FeedContainer';
import Sidebar from './Components/Sidebar';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const [rssUrl, setRssUrl] = useState("");

  const getRss = async (url) => {
    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl || url}`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const items = feed.querySelectorAll("item");
    const feedItems = [...items].map(el => ({
      // image: el.querySelectorAll("media:content").innerHTML,
      link: el.querySelector("link").innerHTML,
      title: el.querySelector("title").innerHTML,
      description: el.querySelector("description").innerHTML
    }));
    setItems(feedItems);
  };

  useEffect(() => {
    getRss('http://www.npr.org/rss/rss.php?id=1019')
  })

  return (
    <div className="App">
      
      {/* {items.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href={item.link}>Full Article</a>
          </div>
        );
      })} */}
      <Sidebar />
      <FeedContainer 
      items={items}
      setItems={setItems}
      rssUrl={rssUrl}
      setRssUrl={setRssUrl}
      getRss={getRss}
      />
    </div>
  );
}


export default App;
