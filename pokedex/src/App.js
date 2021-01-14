import React ,{ useEffect, useState } from "react";
import PokeContext from "./contexts/PokeContext";
import Routes from "./Routes";
import { BASE_URL } from "./constants/urls";
import axios from "axios"

function App() {
  const [displayBattle, setDisplayBattle] = useState(false)
  const [pokeList, setPokeList] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [popUp, setPopUp] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const data = { displayBattle, setDisplayBattle, pokeList , setPokeList , pokedex , setPokedex , popUp , setPopUp , pokemon , setPokemon }
  
  useEffect(() =>{
    let i = 1;
    do {
      axios.get(BASE_URL+i).then((response) => {
        setPokeList( array => [...array, response.data])
      }).catch((error) => {
        console.log(error)
      })
      i++
    } while (i<20);
  }, [setPokeList])

  return (
    <PokeContext.Provider value={data}>
      <Routes/>
    </PokeContext.Provider>
  );
}

export default App;
