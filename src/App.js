import './App.css';
import FeedContainer from './Components/FeedContainer';
import Sidebar from './Components/Sidebar';
import XMLParser from 'react-xml-parser';
import { useEffect } from 'react';




function App() {


useEffect(() => {
  fetch("https://feeds.simplecast.com/54nAGcIl")
      .then(res => res.text())
      .then(data => {
          var xml = new XMLParser().parseFromString(data); 
          console.log(xml.children)
      })
      .catch(err => console.log(err));
}, [])

  return (
    <div className="App">
      <Sidebar />
      <FeedContainer />
    </div>
  );
}


export default App;
