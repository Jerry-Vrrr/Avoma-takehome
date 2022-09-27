import './Feed.css';
import bookmark from '../bookmark-pngrepo-com.png'
import bookmarked from '../bookmarked-pngrepo-com.png'
 
export default function Feed({title, description, link, items, marked, id, favorites, setFavorites}) {
  
  const saveArticle = (e) => {
    e.preventDefault();

    items.map(item => {
      
      if (items.indexOf(item) + 1 == e.target.parentNode.parentNode.id && !item.marked) {
        item.marked = true
        e.target.src = bookmarked
        setFavorites(sessionStorage)
        sessionStorage.setItem(item.title, JSON.stringify(item.link))
      }
      else if (items.indexOf(item) + 1 == e.target.parentNode.parentNode.id && item.marked) {
        item.marked = false
        e.target.src = bookmark
        setFavorites(sessionStorage)
        sessionStorage.removeItem(item.title)
      }
    })
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
