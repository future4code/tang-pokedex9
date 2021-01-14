import React, { useContext , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { CardsContainer } from '../../Components/CardsContainer/styles'
import Header from '../../Components/Header'
import PokeContext from '../../contexts/PokeContext'
import { goToDetailPage } from '../../Routes/coordinators'
import PokeCard from '../../Components/PokeCard'
import Loading from "../../Components/Loading";
import PopUp from '../../Components/PopUp'

export default function HomePage() {
    const history = useHistory()
    const data = useContext(PokeContext)
    data.pokeList.sort(function(a,b){return a.id - b.id})

    useEffect(() => {
        data.setDisplayBattle(false)
    }, [])

    const closePopUp = () => {
        const toggle = !data.popUp
        data.setPopUp(toggle)    
    }
    
    const addToPokedex = (newItem) => {
        const position = data.pokeList.findIndex((item) => item.id === newItem.id)       
        let newPokeList = [...data.pokeList]
        if (position !== -1) {
            data.setPokedex( array => [...array, newItem])
            newPokeList.splice(position,1)
        }  
        data.setPokeList(newPokeList)
        data.setPopUp(!data.popUp)
    }
    
    const renderPokeList = data.pokeList.map((item) => {
        return (
            <PokeCard
                key={item.id}
                name={item.name.toUpperCase()}
                img={item.sprites.front_default}
                goToDetail={() => goToDetailPage(history, item.id)}
                btnFunction={() => addToPokedex(item)}
                btnName="Add to Pokedex"
            />
        )
    })

    return (
        <div>
            {data.popUp? <PopUp message={`Pokemon added to pokedex!`} onClickBtn={closePopUp}/> : null}
            <Header pageName="Pokemon List"/>
            <CardsContainer>
                {data.pokeList[0] ? renderPokeList : <Loading/>}
            </CardsContainer>
        </div>
    )
}

