import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToPokedexPage} from '../../Routes/coordinators'

export default function HomePage() {
    const history = useHistory()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
        </div>
    )
}