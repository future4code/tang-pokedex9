import React, { useState , useEffect } from 'react'
import Header from '../../Components/Header'
import { MyPokemonInfo, EnemyInfo, EnemyImg, MyPokemonImg, PageContainer, OptionsContainer } from './styles'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import Loading from '../../Components/Loading'


export default function BattlePage() {
    const [enemy, setEnemy] = useState({})
    const [currentEnemyHP, setCurrentEnemyHP] = useState(0)


    useEffect(() => {
        axios.get(`${BASE_URL}${Math.floor((Math.random() * 151) + 1)}`).then((res) =>{
            setEnemy(res.data)
            setCurrentEnemyHP(res.data.stats[0].base_stat)
            console.log(res.data)
        }).catch((error) => {
            alert(`${error}: Tente novamente`)
        })
    }, [])
   
    const renderBattle = () => {
        let specialAtkAmount = Math.floor((Math.random() * 3) + 1)

        return (
            <PageContainer>
                <EnemyInfo>
                    <p> {`WILD ${enemy.name.toUpperCase()}`}</p>
                    <p> HP: {currentEnemyHP} / {enemy.stats[0].base_stat} </p>
                </EnemyInfo>
                <EnemyImg src={enemy.sprites.front_default} alt="" />
                <MyPokemonImg src={enemy.sprites.back_default} alt=""  />
                <MyPokemonInfo>
                    <div>
                        <p> {enemy.name.toUpperCase()}</p>
                        <p> HP: current / max </p>
                        <p>Special Atk Left: {specialAtkAmount}</p>
                        {/* <p>Special Def Left: 2</p> */}
                    </div>
                    <OptionsContainer>
                        <button >Attack</button>
                        <button >Special Attack</button> 
                    </OptionsContainer>
                </MyPokemonInfo>
            </PageContainer>
        )
    } 

    return (
        <div>
            <Header pageName='Batalha'/>
            {enemy.id? renderBattle() : <Loading/>}
        </div>
    )
}
