import styled from "styled-components";
import battleGround from "../../img/battleground02.png"

export const PageContainer = styled.div `
    border: 1px solid red;
    height: 85vh;
    background-image: url(${battleGround});
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . . . . . . ."
    ". EnemyInfo EnemyInfo EnemyInfo EnemyInfo EnemyInfo . . . . ."
    ". EnemyInfo EnemyInfo EnemyInfo EnemyInfo EnemyInfo . EnemyImg EnemyImg EnemyImg ."
    ". . . . . . . EnemyImg EnemyImg EnemyImg ."
    ". . MyPokemonImg MyPokemonImg MyPokemonImg . . EnemyImg EnemyImg EnemyImg ."
    ". . MyPokemonImg MyPokemonImg MyPokemonImg . . . . . ."
    ". . MyPokemonImg MyPokemonImg MyPokemonImg MyPokemonInfo MyPokemonInfo MyPokemonInfo MyPokemonInfo MyPokemonInfo ."
    ". . . . . MyPokemonInfo MyPokemonInfo MyPokemonInfo MyPokemonInfo MyPokemonInfo ."
    ". . . . . . . . . . .";
`

export const EnemyInfo = styled.div `
    border: 4px solid black;
    background-color: whitesmoke;
    border-radius: 8px;
    grid-area: EnemyInfo;
p {
    margin: 0;
    margin-top: 8px;
    margin-left: 16px;
    font-weight: 600;
}
`

export const EnemyImg = styled.img `
    grid-area: EnemyImg;
    width: 60%;
`

export const MyPokemonImg = styled.img `
    grid-area: MyPokemonImg;
    width: 80%;
`

export const MyPokemonInfo = styled.div `
    display: flex;
    justify-content: space-around;
    grid-area: MyPokemonInfo;
    border: 4px solid black;
    background-color: whitesmoke;
    border-radius: 8px;
p {
    margin: 0;
    margin-top: 8px;
    margin-left: 16px;
    font-weight: 600;
}
`
export const OptionsContainer = styled.div `
    display: flex;
    flex-direction: column;
button{
    width: 160px;
    height: 36px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 600;
    padding:4px 16px;
    border: 4px solid black;
    background-color: whitesmoke;
    border-radius: 4px;
} 
button:hover {
    background-color: lightgray;
}
button:active {
    font-size: 14px;
}

`