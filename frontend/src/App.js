import './App.css';
import StartPage from './components/StartPage.jsx';
import {useEffect, useState} from 'react'
import axios from 'axios'
import {getData} from './functions/functions.js'
function App() {
  let [startpageRubrik, setStartpageRubrik] = useState("Default rubrik");
  let [featured, setFeatured] = useState(null);





  useEffect(() => {
    //vad som ska göras
    getData("http://localhost:1337/api/homepage").then(res => {
      setStartpageRubrik(res.data.attributes.HeaderRubrik);
      setFeatured(res.data.attributes.FeaturedText)
    })

  },
  //när det ska göras
[]
  )
  return (
    <div className="App">
      <header className="App-header">
        <StartPage rubrik={startpageRubrik} featured={featured}/>
      </header>
    </div>
  );
}

export default App;
