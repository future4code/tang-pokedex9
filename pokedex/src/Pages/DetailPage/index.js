import React from 'react'
import BackButton from '../../Components/BackButton'
import Header from '../../Components/Header'
import { DetailsContainer, InfoContainer } from './styles'

export default function DetailsPage() {
    return (
        <div>
            <Header pageName="Nome do Pokemon"/>
            <DetailsContainer>
                <InfoContainer>
                    <p>front img</p>
                    <p>back img</p>
                </InfoContainer>
                <InfoContainer>
                    <p>poke type</p>
                    <p>poke stats</p>
                </InfoContainer>
                <InfoContainer>
                    <p>special attacks</p>
                </InfoContainer>
            </DetailsContainer>
        </div>
    )
}
