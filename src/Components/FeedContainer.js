import React from "react";
import "./FeedContainer.css";
import Feed from "./Feed";

export default function FeedContainer({
  items,
  setRssUrl,
  rssUrl,
  getRss,
  currentFeed,
  marked,
  setMarked,
  setItems,
  favorites,
  setFavorites
}) {
  const feeds = items.map((item) => {
    return (
      <Feed
        key={items.indexOf(item) + 1}
        id={items.indexOf(item) + 1}
        title={item.title}
        description={item.description}
        link={item.link}
        setMarked={setMarked}
        marked={false}
        items={items}
        setItems={setItems}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    );
  });
  return (
    <div className="feed-container">
      <div className="header">
        <h1>{currentFeed}</h1>
        <p>{feeds.length} Articles</p>
      </div>
      {feeds}
    </div>
  );
}
