import './App.css';
import {useState, useEffect} from "react"
import BeerCard from './Components/BeerCard';

function App() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    const fetchBeers = async() => {
      const results = await fetch("https://api.punkapi.com/v2/beers")
      const data = await results.json()
      console.log(data)
      setBeers(data)
    }
    fetchBeers()
  }, [])
  return (
    <div className="App">
      <main className="App-header">
       <h2>Nate's Beer App</h2>
       {beers.map((beer) => (
          <BeerCard beer={beer} key={beer.id}/>
       ))}
      </main>
    </div>
  );
}

export default App;
