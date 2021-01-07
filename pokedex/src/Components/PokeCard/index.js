import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToDetailPage } from '../../Routes/coordinators'
import { CardContainer } from './styles'

export default function PokeCard() {
    const history = useHistory()

    return (
        <CardContainer>
            <h2>Nome do Pokemon</h2>
            <p>imagem do pokemon</p>
            <div>
                <button onClick={() => goToDetailPage(history)}>Detalhes</button>
                <button>Adicionar na Pokedex</button>
            </div>
        </CardContainer>
    )
}
