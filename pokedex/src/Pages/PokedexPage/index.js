import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { goToBattlePage, goToDetailPage } from '../../Routes/coordinators';
import { CardsContainer } from '../../Components/CardsContainer/styles'
import Header from '../../Components/Header'
import PokeContext from '../../contexts/PokeContext'
import PokeCard from '../../Components/PokeCard'
import PopUp from '../../Components/PopUp'

export default function PokedexPage() {
    const history = useHistory()
    const data = useContext(PokeContext)
    data.pokeList.sort(function(a,b){return a.id - b.id})

    const closePopUp = () => {
        const toggle = !data.popUp
        data.setPopUp(toggle)    
    }

    const removeFromPokedex = (removedItem) => {
        const position = data.pokedex.findIndex((item) => item.id === removedItem.id)       
        let newPokedex = [...data.pokedex]
        if (position !== -1) {
            newPokedex.splice(position, 1)
            data.setPokeList( array => [...array, removedItem])            
        } 
        data.setPokedex(newPokedex)
        data.setPopUp(!data.popUp)
    }

    const goToBattle = (pokemon) => {
        data.setPokemon(pokemon)
        goToBattlePage(history)
    }
    
    const renderPokedex = data.pokedex.map((item) => {
        return (
            <PokeCard
                key={item.id}
                name={item.name.toUpperCase()}
                img={item.sprites.front_default}
                goToDetail={() => goToDetailPage(history, item.id)}
                battleFunction={() => goToBattle(item)}
                btnFunction={() => removeFromPokedex(item)}
                btnName="Remover da Pokedex"
            />
        )
    })


    return (
        <div>
            {data.popUp? <PopUp message={`Pokemon removido da pokedex!`} onClickBtn={closePopUp} /> : null}
            <Header pageName="Pokedex"/>
            <CardsContainer>
                {renderPokedex}
            </CardsContainer>
        </div>
    )
}