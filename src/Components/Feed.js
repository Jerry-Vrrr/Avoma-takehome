import './Feed.css';
import bookmark from '../bookmark-pngrepo-com.png'
import bookmarked from '../bookmarked-pngrepo-com.png'
 
export default function Feed({title, description, link, items, setItems, marked, id, favorites, setFavorites}) {
  
  const saveArticle = (e) => {
    e.preventDefault();
    items.map(item => {
      if (items.indexOf(item) + 1 == e.target.parentNode.parentNode.id) {
        item.marked = true
        e.target.src = bookmarked
        setFavorites(sessionStorage)
        // sessionStorage.removeItem('favorites')
        sessionStorage.setItem(item.title, JSON.stringify(item))
        console.log('fav', favorites.length)
      }
    })
    setItems(items);
  }


  return (
    <div id={id} className='feed'>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>Full Article</a>
        <img onClick={(e) => saveArticle(e)} className='bookmark' src={bookmark}/> 
      </div>
    </div>
  )
}
