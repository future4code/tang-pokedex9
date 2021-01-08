import React ,{ useEffect, useState } from "react";
import PokeContext from "./contexts/PokeContext";
import Routes from "./Routes";
import { BASE_URL } from "./constants/urls";
import axios from "axios"

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokedex, setPokedex] = useState([])
  const data = {
    pokeList: pokeList, 
    setPokeList: setPokeList,
    pokedex: pokedex,  
    setPokedex: setPokedex
  }
  
  useEffect(() =>{
    let i = 1;
    do {
      axios.get(BASE_URL+i).then((response) => {
        setPokeList( array => [...array, response.data])
      }).catch((error) => {
        console.log(error)
      })
      i++
    } while (i<21);
  }, [setPokeList])

  return (
    <PokeContext.Provider value={data}>
      <Routes/>
    </PokeContext.Provider>
  );
}

export default App;
