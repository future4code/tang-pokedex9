import React, { useState , useEffect , useContext } from 'react'
import Header from '../../Components/Header'
import { MyPokemonInfo, EnemyInfo, EnemyImg, MyPokemonImg, PageContainer, OptionsContainer } from './styles'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import Loading from '../../Components/Loading'
import PokeContext from '../../contexts/PokeContext'
import PopUp from '../../Components/PopUp'
import { useHistory } from 'react-router-dom'

export default function BattlePage() {
    const history = useHistory();
    const [throwedPokeball, setThrowedPokeball] = useState(false);
    const [fail, setFail] = useState(false);
    const [enemy, setEnemy] = useState({})
    const [currentEnemyHP, setCurrentEnemyHP] = useState(0)
    const [myPokemonHP, setMyPokemonHP] = useState(0)
    const [specialAtkAmount, setSpecialAtkAmount] = useState(1)
    const [message, setMessage] = useState("")
    const [enemyTurn, setEnemyTurn] = useState(false)
    const data = useContext(PokeContext)

    const TogglePopUp = () => {
        data.setPopUp(!data.popUp)    
    }

    useEffect(() => {
        axios.get(`${BASE_URL}${Math.floor((Math.random() * 151) + 1)}`).then((res) =>{
            setEnemy(res.data)
            setCurrentEnemyHP(res.data.stats[0].base_stat)
            setMyPokemonHP(data.pokemon.stats[0].base_stat)
            setSpecialAtkAmount(Math.floor((Math.random() * 3) + 1))
            //console.log(res.data)
            //console.log(data.pokemon)
        }).catch((error) => {
            alert(`${error}: Tente novamente`)
        })
    }, [])
   
    const renderBattle = () => {
        /* 
        fazes da batalha
        -> checagem de velocidade, se pokemon da engine tem maior velocidade, ataca primeiro
        */

       const minDamage = (data.pokemon.stats[1].base_stat * 0.5) - (enemy.stats[2].base_stat * 0.6)
       const maxDamage = (data.pokemon.stats[1].base_stat) - (enemy.stats[2].base_stat * 0.3)
       let damage = Math.floor((Math.random() * maxDamage) + minDamage)
       

       const enemyAtk = () => {
           const EnemyMinDmg = (enemy.stats[1].base_stat * 0.5) - (data.pokemon.stats[2].base_stat * 0.6)
           const EnemyMaxDmg = (enemy.stats[1].base_stat) - (data.pokemon.stats[2].base_stat * 0.3)
           let enemyDmg = Math.floor((Math.random() * EnemyMaxDmg) + EnemyMinDmg)
           if (enemyDmg < (enemy.stats[1].base_stat * 0.1) ) {
               enemyDmg = Math.round(enemy.stats[1].base_stat * 0.1)
           } else if (enemyDmg > (enemy.stats[0].base_stat * 0.8) ) {
               enemyDmg = Math.round(enemy.stats[0].base_stat * 0.8)
           }
           setMyPokemonHP(myPokemonHP - enemyDmg)
           setMessage(`${enemy.name} attacks and deals ${enemyDmg} damage!`)
           setEnemyTurn(!enemyTurn)
       }

        const attack = () => {
            if (damage < (data.pokemon.stats[1].base_stat * 0.1)) {
                damage = Math.round(data.pokemon.stats[1].base_stat * 0.1) 
            } else if (damage > (enemy.stats[0].base_stat * 0.8)) {
                damage = Math.round(enemy.stats[0].base_stat * 0.8) 
            }
            setCurrentEnemyHP(currentEnemyHP - damage)
            setMessage(`${data.pokemon.name} attacks and deals ${damage} damage!`)
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
            setCurrentEnemyHP(currentEnemyHP - specialDmg)
            setSpecialAtkAmount(specialAtkAmount - 1)
            console.log(specialDmg)
            setMessage(`${data.pokemon.name} uses a special attack and deals ${specialDmg} damage!`)
        }

        const battleTurn = (playerAtk) => {
            if (playerAtk === "special") {
                specialAttack()
                TogglePopUp()
                if (currentEnemyHP > 0) {
                    setEnemyTurn(!enemyTurn)
                }
            } else if (playerAtk === "attack"){
                attack()
                TogglePopUp()
                if (currentEnemyHP > 0) {
                    setEnemyTurn(!enemyTurn)
                }
            }
        }

        const addToPokedex = (newItem) => {
            data.setPokedex( array => [...array, newItem])
            console.log(newItem.name)
        }

        const throwPokeball = () => {
            const catchChance = 60 + (currentEnemyHP * -1)
            const catchTest = Math.floor((Math.random() * 100) + 1)
            if (catchTest < catchChance ) {
                setMessage(
                    `${data.pokemon.name} wins the battle! 
                    You throws a pokeball and... Success! 
                    ${enemy.name} added to the pokedex! `
                )
                addToPokedex(enemy)
            } else {
                setMessage(
                    `${data.pokemon.name} wins the battle! 
                    You throws a pokeball and... Failed! 
                    ${enemy.name} runs away! `
                )
            }

            setThrowedPokeball(true)
        }

        const nextStep = () => {
            if (enemyTurn && (currentEnemyHP > 0) ) {
                enemyAtk()
            } else if (currentEnemyHP < 1 && throwedPokeball === false) {
                throwPokeball()
            } else if (throwedPokeball) {
                history.push('/pokedex')
                TogglePopUp()
            } else if (myPokemonHP < 1 && fail === false) {
                setFail(true)
                setMessage(
                    `${data.pokemon.name} lose the battle! 
                    Returning to Pokedex!`
                )
            } else if (fail) {
                history.push('/pokedex')
                TogglePopUp()
            } else {
                TogglePopUp()   
            }
        }

        return (
            <div>
                {data.popUp? <PopUp message={message} onClickBtn={() =>nextStep()}/> : null}
                <Header pageName='Batalha'/>
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
                            <button onClick={() => battleTurn("attack")} >Attack</button>
                            <button disabled={specialAtkAmount > 0 ? false : true} onClick={() => battleTurn("special")} >Special Attack</button> 
                        </OptionsContainer>
                    </MyPokemonInfo>

                </PageContainer>
            </div>
        )
    } 

    return (
        <div>
            {enemy.id && data.pokemon.id ? renderBattle() : <Loading/>}
        </div>
    )
}
