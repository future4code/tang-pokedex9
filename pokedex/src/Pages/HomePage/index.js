import React from 'react'
import { useHistory } from 'react-router-dom'
import CardsContainer from '../../Components/CardsContainer'
import Header from '../../Components/Header'

export default function HomePage() {
    return (
        <div>
            <Header pageName="Lista de Pokemons"/>
            <CardsContainer/>
        </div>
    )
}