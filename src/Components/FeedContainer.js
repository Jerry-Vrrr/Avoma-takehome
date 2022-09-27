import React from "react";
import "./FeedContainer.css";
import Feed from "./Feed";

export default function FeedContainer({
  items,
  currentFeed,
  feeds,
  setItems,
  favorites,
  setFavorites
}) {
  
  const articles = items.map((item) => {
    return (
      <Feed
        key={items.indexOf(item) + 1}
        id={items.indexOf(item) + 1}
        title={item.title}
        description={item.description}
        link={item.link}
        marked={item.marked}
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
        <p>{articles.length} Articles</p>
      </div>
      {articles}
    </div>
  );
}
