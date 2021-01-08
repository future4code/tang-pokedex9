import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { goToDetailPage } from '../../Routes/coordinators';
import { CardsContainer } from '../../Components/CardsContainer/styles'
import Header from '../../Components/Header'
import PokeContext from '../../contexts/PokeContext'
import PokeCard from '../../Components/PokeCard'


export default function PokedexPage() {
    const history = useHistory()
    const data = useContext(PokeContext)
    data.pokeList.sort(function(a,b){return a.id - b.id})

    const removeFromPokedex = (removedItem) => {
        const position = data.pokedex.findIndex((item) => item.id === removedItem.id)       
        let newPokedex = [...data.pokedex]
        if (position !== -1) {
            newPokedex.splice(position, 1)
            data.setPokeList( array => [...array, removedItem])            
        } 
        data.setPokedex(newPokedex)
        alert(`${removedItem.name} removido da pokedex!`)
    }
    
    const renderPokedex = data.pokedex.map((item) => {
        return (
            <PokeCard
                name={item.name.toUpperCase()}
                img={item.sprites.front_default}
                goToDetail={() => goToDetailPage(history)}
                btnFunction={() => removeFromPokedex(item)}
                btnName="Remover da Pokedex"
            />
        )
    })


    return (
        <div>
            <Header pageName="Pokedex"/>
            <CardsContainer>
                {renderPokedex}
            </CardsContainer>
        </div>
    )
}