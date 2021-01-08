import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CardsContainer } from '../../Components/CardsContainer/styles'
import Header from '../../Components/Header'
import PokeContext from '../../contexts/PokeContext'
import { goToDetailPage } from '../../Routes/coordinators'
import PokeCard from '../../Components/PokeCard'
import loading from "../../img/loading.gif";

export default function HomePage() {
    const history = useHistory()
    const data = useContext(PokeContext)
    data.pokeList.sort(function(a,b){return a.id - b.id})
    
    const addToPokedex = (newItem) => {
        const position = data.pokeList.findIndex((item) => item.id === newItem.id)       
        let newPokeList = [...data.pokeList]
        if (position !== -1) {
            data.setPokedex( array => [...array, newItem])
            newPokeList.splice(position,1)
        }  
        data.setPokeList(newPokeList)
        alert(`${newItem.name} adicionado à pokedex!`)
    }
    
    const renderPokeList = data.pokeList.map((item) => {
        return (
            <PokeCard
                name={item.name.toUpperCase()}
                img={item.sprites.front_default}
                goToDetail={() => goToDetailPage(history)}
                btnFunction={() => addToPokedex(item)}
                btnName="Adicionar à Pokedex"
            />
        )
    })

    return (
        <div>
            <Header pageName="Lista de Pokemons"/>
            <CardsContainer>
                {data.pokeList[0] ? renderPokeList : <div><img src={loading} alt="Carregando..." /></div>}
            </CardsContainer>
        </div>
    )
}