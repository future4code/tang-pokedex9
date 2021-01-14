import React, { useContext }  from 'react'
import PokeContext from '../../contexts/PokeContext'
import { CardContainer, BtnContainer, BattleBtn, OptionsContainer } from './styles'

export default function PokeCard(props) {
    const data = useContext(PokeContext)

    return (
        <CardContainer key={props.id}>
            <h2>{props.name}</h2>
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <OptionsContainer>
                {data.displayBattle ? <BattleBtn onClick={props.battleFunction}>Choose for Battle</BattleBtn> : null}
                <BtnContainer>
                    <button onClick={props.goToDetail}>Details</button>
                    <button onClick={props.btnFunction}>{props.btnName}</button>
                </BtnContainer>
            </OptionsContainer>
        </CardContainer>
    )
}