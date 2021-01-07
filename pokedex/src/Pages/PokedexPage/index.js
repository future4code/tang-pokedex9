import React from 'react'
import { useHistory } from 'react-router-dom';
import BackButton from "../../Components/BackButton";
import { goToDetailPage } from '../../Routes/coordinators';
import CardsContainer from '../../Components/CardsContainer'
import Header from '../../Components/Header'

export default function PokedexPage() {
    const history = useHistory()

    return (
        <div>
            <Header pageName="Pokedex"/>
            <CardsContainer/>
        </div>
    )
}