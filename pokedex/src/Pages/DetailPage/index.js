import React from 'react'
import Header from '../../Components/Header'
import { DetailsContainer, InfoContainer } from './styles'

export default function DetailsPage(props) {
    return (
        <div>
            <Header pageName={props.name}/>
            <DetailsContainer>
                <InfoContainer>
                    <img src={props.imgFront} alt={`${props.name} front`}/>
                    <img src={props.imgBack} alt={`${props.name} back`} />
                </InfoContainer>
                <InfoContainer>
                    <p>{props.type}</p>
                    <ul>
                        <li>{props.hp} : {props.hpScore}</li>
                        <li>{props.attack} : {props.attackScore}</li>
                        <li>{props.defense} : {props.defenseScore}</li>
                        <li>{props.specialAtk} : {props.specialAtkScore}</li>
                        <li>{props.specialDef} : {props.specialDefScore}</li>
                        <li>{props.speed} : {props.speedScore}</li>
                    </ul>
                </InfoContainer>
                <InfoContainer>
                    <p>{props.moves}</p>
                </InfoContainer>
            </DetailsContainer>
        </div>
    )
}
