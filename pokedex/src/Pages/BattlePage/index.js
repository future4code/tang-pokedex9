import React, { useState , useEffect , useContext } from 'react'
import Header from '../../Components/Header'
import { MyPokemonInfo, EnemyInfo, EnemyImg, MyPokemonImg, PageContainer, OptionsContainer } from './styles'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import Loading from '../../Components/Loading'
import PokeContext from '../../contexts/PokeContext'
import PopUp from '../../Components/PopUp'

export default function BattlePage() {
    const [enemy, setEnemy] = useState({})
    const [currentEnemyHP, setCurrentEnemyHP] = useState(0)
    const [myPokemonHP, setPokemonHP] = useState(0)
    const [specialAtkAmount, setSpecialAtkAmount] = useState(1)
    const data = useContext(PokeContext)

    useEffect(() => {
        axios.get(`${BASE_URL}${Math.floor((Math.random() * 151) + 1)}`).then((res) =>{
            setEnemy(res.data)
            setCurrentEnemyHP(res.data.stats[0].base_stat)
            setPokemonHP(data.pokemon.stats[0].base_stat)
            setSpecialAtkAmount(Math.floor((Math.random() * 3) + 1))
            console.log(res.data)
            console.log(data.pokemon)
        }).catch((error) => {
            alert(`${error}: Tente novamente`)
        })
    }, [])
   
    const renderBattle = () => {
        //Precisamos renderizar diferentes mensagens no popup em diferentes momentos
        //de acordo com as fazes da batalha
        // É preciso fazer a lógica inversa dos ataques para os ataques da engine
        
        /* 
        fazes da batalha
        -> checagem de velocidade, se pokemon da engine tem maior velocidade, ataca primeiro
        -> ataque do jogador
        -> ataque da engine
        -> repete até algum pokemon ficar com HP menor que 1
        -> se jogador perde, mensagem e retorna a pokedex
        -> se jogador ganha, tentativa de capturar o pokemon
        -> se capturado adiciona o pokemon a pokedex e chama outro pokemon para batalha (ou retorna para pokedex?)
        */

       const minDamage = (data.pokemon.stats[1].base_stat * 0.5) - (enemy.stats[2].base_stat * 0.6)
       const maxDamage = (data.pokemon.stats[1].base_stat) - (enemy.stats[2].base_stat * 0.3)
       let damage = Math.floor((Math.random() * maxDamage) + minDamage)

        const attack = () => {
            if (damage < (data.pokemon.stats[1].base_stat * 0.1)) {
                damage = Math.round(data.pokemon.stats[1].base_stat * 0.1) 
            } else if (damage > (enemy.stats[0].base_stat * 0.8)) {
                damage = Math.round(enemy.stats[0].base_stat * 0.8) 
            }
            console.log(damage)
            setCurrentEnemyHP(currentEnemyHP - damage)
            return damage
        }

        const specialAttack = () => {
            let multiplier = (data.pokemon.stats[3].base_stat + enemy.stats[4].base_stat) / enemy.stats[4].base_stat
            if (multiplier < 1.5) {
                multiplier = 1.5
            } else if (multiplier > 2) {
                multiplier = 2
            }
            let specialDmg = Math.round((attack() * multiplier)) 
            if ( specialDmg < 15) {
                specialDmg = 15
            }
            console.log(specialDmg)
            setCurrentEnemyHP(currentEnemyHP - specialDmg)
            setSpecialAtkAmount(specialAtkAmount - 1)
        }

        return (
            <PageContainer>

                <EnemyInfo>
                    <p> {`WILD ${enemy.name.toUpperCase()}`}</p>
                    <p> HP: {currentEnemyHP} / {enemy.stats[0].base_stat} </p>
                </EnemyInfo>
                <EnemyImg src={enemy.sprites.front_default} alt="" />

                <MyPokemonImg src={data.pokemon.sprites.back_default} alt=""  />
                <MyPokemonInfo>
                    <div>
                        <p> {data.pokemon.name.toUpperCase()}</p>
                        <p> HP: {myPokemonHP} / {data.pokemon.stats[0].base_stat} </p>
                        <p>Special Atk Left: {specialAtkAmount}</p>
                    </div>
                    <OptionsContainer>
                        <button onClick={() => attack()} >Attack</button>
                        <button onClick={() => specialAttack()} >Special Attack</button> 
                    </OptionsContainer>
                </MyPokemonInfo>

            </PageContainer>
        )
    } 

    return (
        <div>
            <Header pageName='Batalha'/>
            {enemy.id && data.pokemon.id ? renderBattle() : <Loading/>}
        </div>
    )
}
