import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PokeContext from '../../contexts/PokeContext'
import { goToDetailPage } from '../../Routes/coordinators'
import PokeCard from '../PokeCard'
import { PokeContainer } from './styles'
import loading from "../../img/loading.gif";

export default function CardsContainer() {
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
        <PokeContainer>
            {data.pokeList[0] ? renderPokeList : <div><img src={loading} alt="Carregando..." /></div>}
        </PokeContainer>
    )
}
