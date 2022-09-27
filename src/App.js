import './App.css';
import FeedContainer from './Components/FeedContainer';
import Sidebar from './Components/Sidebar';
import FavoriteModal from './Components/FavoriteModal';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


function App() {
  const [items, setItems] = useState([]);
  const [rssUrl, setRssUrl] = useState("");
  const [currentFeed, setCurrentFeed] = useState('Home')
  const [favorites, setFavorites] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [feeds, setFeeds] = useState([])

  const getRss = async (url) => {
    const res = await fetch(`https://api.allorigins.win/get?url=${url}`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const items = feed.querySelectorAll("item");
    const feedItems = [...items].map(el => ({
      link: el.querySelector("link").innerHTML,
      title: el.querySelector("title").innerHTML,
      description: el.querySelector("description").innerHTML,
      marked: false
    }));
    setItems(feedItems);
  };

  useEffect(() => {
    getRss('http://www.newyorker.com/feed/humor')
    setFavorites(Cookies.get())
    console.log(favorites)
  }, [])

  return (
    <div className="App">
      {<FavoriteModal 
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        favorites={favorites}
        setFavorites={setFavorites}
      />}
      <Sidebar 
        getRss={getRss}
        setCurrentFeed={setCurrentFeed}
        setItems={setItems}
        setFavorites={setFavorites}
        favorites={favorites}
        setIsOpen={setIsOpen}
      />
      <FeedContainer 
      items={items}
      setItems={setItems}
      feeds={feeds}
      setFeeds={setFeeds}
      rssUrl={rssUrl}
      setRssUrl={setRssUrl}
      getRss={getRss}
      currentFeed={currentFeed}
      favorites={favorites}
      setFavorites={setFavorites}
      />
    </div>
  );
}


export default App;
