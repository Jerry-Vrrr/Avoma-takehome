import './Feed.css';
import bookmark from '../bookmark-pngrepo-com.png'
import bookmarked from '../bookmarked-pngrepo-com.png'
import Cookies from 'js-cookie';

export default function Feed({title, description, link, items, marked, id, favorites, setFavorites}) {
  
  const saveArticle = (e) => {
    e.preventDefault();

    items.map(item => {
      if (items.indexOf(item) + 1 == e.target.parentNode.parentNode.id && !item.marked) {
        item.marked = true
        e.target.src = bookmarked
        Cookies.set(items.indexOf(item) + 1 , JSON.stringify(item.link))
        setFavorites(Cookies.get())
      }
      else if (items.indexOf(item) + 1 == e.target.parentNode.parentNode.id && item.marked) {
        item.marked = false
        e.target.src = bookmark
        Cookies.remove(items.indexOf(item) + 1)
        setFavorites(Cookies.get())
      }
    })
  }

  return (
    <div id={id} className='feed'>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>Full Article</a>
        <img alt='save-article' onClick={(e) => saveArticle(e)} className='bookmark' src={bookmark}/> 
      </div>
    </div>
  )
}
