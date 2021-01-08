import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PokeContext from '../../contexts/PokeContext'
import { goToDetailPage } from '../../Routes/coordinators'
import PokeCard from '../PokeCard'
import { PokeContainer } from './styles'

export default function CardsContainer() {
    const history = useHistory()
    const [pokedex, setPokedex] = useState([])
    const pokeList = useContext(PokeContext)
    pokeList.list.sort(function(a,b){return a.id - b.id})

    
    
    const addToPokedex = (newItem) => {
        const position = pokeList.list.findIndex((item) => item.id === newItem.id)
        console.log(newItem)        
        
        // let newPokedex = [...pokedex]
        let newPokeList = [...pokeList.list]
        if (position !== -1) {
            setPokedex( array => [...array, newItem])
            // newPokedex.push({...newItem})
            newPokeList.splice(position,1)
        }  
        // setPokedex(newPokedex) 
        pokeList.setList(newPokeList)
        alert(`${newItem.name} adicionado à pokedex!`)
        console.log(pokedex)
    }

    
    const renderList = pokeList.list.map((item) => {
        return (
            <PokeCard
                name={item.name.toUpperCase()}
                img={item.sprites.front_default}
                goToDetail={() => goToDetailPage(history)}
                addToPokedex={() => addToPokedex(item)}
            />
        )
    })
    
    return (
        <PokeContainer>
            {pokeList.list[0] ? renderList : <div>Carregando...</div>}
        </PokeContainer>
    )
}
