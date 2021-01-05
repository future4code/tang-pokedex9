import React from 'react'
import { useHistory } from 'react-router-dom';
import BackButton from "../../Components/BackButton";
import { goToDetailPage } from '../../Routes/coordinators';

export default function PokedexPage() {
    const history = useHistory()

    return (
        <div>
            <h1>Pokedex</h1>
            <button onClick={() => goToDetailPage(history)}>Detalhes</button>
            <BackButton/>
        </div>
    )
}