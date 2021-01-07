import React from 'react'
import { useHistory } from 'react-router-dom'
import CardsContainer from '../../Components/CardsContainer'
import Header from '../../Components/Header'
import {goToPokedexPage} from '../../Routes/coordinators'

export default function HomePage() {
    const history = useHistory()

    return (
        <div>
            <Header pageName="Lista de Pokemons"/>
            <CardsContainer/>
        </div>
    )
}