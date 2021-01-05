import React from 'react'
import { useHistory } from 'react-router-dom'
import BackButton from '../../Components/BackButton'
import { goToHomePage } from '../../Routes/coordinators'

export default function ErrorPage() {
    const history = useHistory()

    return (
        <div>
            <p>404 - Algo errado não esta certo</p>
            <button onClick={() => goToHomePage(history)}>Home</button>
            <BackButton/>     
        </div>
    )
}