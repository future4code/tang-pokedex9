import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import Loading from '../../Components/Loading'
import { BASE_URL } from '../../constants/urls'
import { DetailsContainer, InfoContainer, TypeContainer } from './styles'

export default function DetailsPage() {
    const [pokemon, setPokemon] = useState({})
    const params = useParams()

    useEffect(() => {
        axios.get(`${BASE_URL}${params.pokeId}`).then((res) =>{
            setPokemon(res.data)
            console.log(res.data)
        }).catch((error) => {
            alert(`${error}: Tente novamente`)
        })
    }, [])

    
    const renderPage = () => {
        return (
            <div>
                <Header pageName={pokemon.name.toUpperCase()}/>
                <DetailsContainer>
                    <InfoContainer>
                        <img src={pokemon.sprites.front_default} alt={`${pokemon.name} front`}/>
                        <img src={pokemon.sprites.back_default} alt={`${pokemon.name} back`} />
                    </InfoContainer>
                    <InfoContainer>
                        <h3>Atributos</h3>
                        {pokemon.stats.map((item) => {
                            return(
                                <p>{item.stat.name} : {item.base_stat}</p>
                            )
                        })}
                    </InfoContainer>
                    <InfoContainer>
                        <h3>Tipo</h3>
                        <TypeContainer>
                            {pokemon.types.map((item) => {
                                return(
                                    <p>{item.type.name}</p>
                                )
                            })}
                        </TypeContainer>
                        <h3>Principais Ataques</h3>
                        {pokemon.moves.slice(0,5).map((item) => {
                            return(
                                <p>{item.move.name}</p>
                            )
                        })}
                    </InfoContainer>
                </DetailsContainer>
            </div>
        )
    }

    return (
        <div>
            {pokemon.id? renderPage() : <Loading/> }          
        </div>
    )
}
