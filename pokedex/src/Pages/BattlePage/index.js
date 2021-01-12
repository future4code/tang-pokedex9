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
    const data = useContext(PokeContext)

    useEffect(() => {
        axios.get(`${BASE_URL}${Math.floor((Math.random() * 151) + 1)}`).then((res) =>{
            setEnemy(res.data)
            setCurrentEnemyHP(res.data.stats[0].base_stat)
            setPokemonHP(data.pokemon.stats[0].base_stat)
        }).catch((error) => {
            alert(`${error}: Tente novamente`)
        })
    }, [])
   
    const renderBattle = () => {
        let specialAtkAmount = Math.floor((Math.random() * 3) + 1)

        //resta fazer a lógica para o ataque e o ataque especial, 
        //além de encontrar uma maneira de renderizar diferentes mensagens no popup 
        //de acordo com as fazes da batalha
        
        /* 
        Pensei nas formulas abaixo, fiz alguns testes e calculos para tentar balancear um pouco, 
        claro q ficou ruim, mas acho q ficou melhor do q trabalhar com os stats absolutos.

        ATAQUE
        usar um math random para sortear valor entre um minimo e maximo
        MIN: ( 50% * ATAQUE ) - (30% * DEFESA)
        MAX: (ATAQUE) - (60% * DEFESA)
        caso o valor sorteado seja < 1  tranformamos em 1 ponto de dano
        
        ATAQUE ESPECIAL
        a formula retorna um multiplicador para o ATAQUE
        ("SPECIAL_ATK" + "SPECIAL_DEF") / "SPECIAL_DEF"
        caso o multiplicador seja < 1,5  transformamos em 1,5
        caso seja > 2 transformamos em 2
        assim o ataque especial vai dar um bonus que varia entre 50% e 100% do ataque
        caso o valor total do dano no final seja < 5 transformamos em 5
        */

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
            {enemy.id && data.pokemon.id ? renderBattle() : <Loading/>}
        </div>
    )
}
