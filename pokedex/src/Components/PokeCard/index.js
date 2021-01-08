import React from 'react'
import { CardContainer } from './styles'

export default function PokeCard(props) {

    return (
        <CardContainer>
            <h2>{props.name}</h2>
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <div>
                <button onClick={props.goToDetail}>Detalhes</button>
                <button onClick={props.addToPokedex}>Adicionar na Pokedex</button>
            </div>
        </CardContainer>
    )
}