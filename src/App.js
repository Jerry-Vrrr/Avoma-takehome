import './App.css';
import FeedContainer from './Components/FeedContainer';
import Sidebar from './Components/Sidebar';
import FavoriteModal from './Components/FavoriteModal';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const [rssUrl, setRssUrl] = useState("");
  const [currentFeed, setCurrentFeed] = useState('Home')
  const [favorites, setFavorites] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);

  const getRss = async (url) => {
    const res = await fetch(`https://api.allorigins.win/get?url=${url}`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const items = feed.querySelectorAll("item");
    const feedItems = [...items].map(el => ({
      link: el.querySelector("link").innerHTML,
      title: el.querySelector("title").innerHTML,
      description: el.querySelector("description").innerHTML,
    }));
    setItems(feedItems);
  };

  useEffect(() => {
    getRss('http://www.newyorker.com/feed/humor')
    setFavorites(sessionStorage)
  }, [])

  return (
    <div className="App">
      {favorites.length &&<FavoriteModal 
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        favorites={favorites}
        setFavorites={setFavorites}
      />}
      <Sidebar 
        getRss={getRss}
        setCurrentFeed={setCurrentFeed}
        setItems={setItems}
        favorites={favorites}
        setIsOpen={setIsOpen}
      />
      <FeedContainer 
      items={items}
      setItems={setItems}
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
