import React from 'react'
import { CardContainer, BtnContainer, BattleBtn, OptionsContainer } from './styles'

export default function PokeCard(props) {
    

    return (
        <CardContainer key={props.id}>
            <h2>{props.name}</h2>
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <OptionsContainer>
                <BattleBtn onClick={props.battleFunction}>Escolher para Batalha</BattleBtn>
                <BtnContainer>
                    <button onClick={props.goToDetail}>Detalhes</button>
                    <button onClick={props.btnFunction}>{props.btnName}</button>
                </BtnContainer>
            </OptionsContainer>
        </CardContainer>
    )
}