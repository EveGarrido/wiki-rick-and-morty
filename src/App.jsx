import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import ResidentsInfo from './components/ResidentsInfo';

function App() {
  const [ location, setLocation] = useState({});
  const [ typeId, setTypeId] = useState("");
  
  useEffect(()=>{
    let randomId = Math.floor(Math.random() * 125) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data));
  }, []);

  console.log(location);

  const searchIdTyped = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then(res => setLocation(res.data));
  };

  return (
    <div className="App">
      <header>
        <section className='location' >
          <h1>Rick and Morty Wiki</h1>
          <div>
            <input type="text" value={typeId} onChange={e => setTypeId(e.target.value)} placeholder=" Type ID Location 1 to 126"/>
            <button onClick={searchIdTyped}>Search</button>
          </div>
          <div className='location-details'>
            <h2 className='shadow'>{location.name}</h2>
            <div className='details' >
              <p className='shadow'><b>Type:</b> {location.type}</p>
              <p className='shadow'><b>Dimension: </b>{location.dimension}</p>
              <p className='shadow'><b>Population: </b>{location.residents?.length}</p>
            </div>       
          </div>
        </section>
      </header>
      <main>
        <h2>Residents</h2>
        <section className='container-cards'>
          {
            location.residents?.map(resident => (                        
              <ResidentsInfo url={resident} key={resident} />                                  
            ))
          }      
        </section>
      </main>
      <footer>
        <p>Developed by Evelyn H. GL</p>
      </footer>
    </div>
  )
}

export default App
