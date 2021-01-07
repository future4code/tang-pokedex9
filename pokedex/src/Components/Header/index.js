import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToHomePage, goToPokedexPage } from '../../Routes/coordinators';
import BackButton from '../BackButton';
import { HeaderContainer } from './styles';

export default function Header(props) {
    const history = useHistory()
    const pageName = props.pageName

    const renderHeader = () => {
        if (pageName === "Lista de Pokemons") {
            return (
                <HeaderContainer>
                    <button onClick={() => goToPokedexPage(history)}>Minha Pokedex</button>
                    <h1>{pageName}</h1>
                </HeaderContainer>
            )
        } else if (pageName === "Pokedex") {
            return (
                <HeaderContainer>
                    <button onClick={() => goToHomePage(history)}>Home</button>
                    <h1>{pageName}</h1>
                </HeaderContainer>
            )
        } else {
            return (
                <HeaderContainer>
                    <BackButton/>
                    <h1>{pageName}</h1>
                </HeaderContainer>
            )
        }
    }


    return (
        <div>
            {renderHeader()}
        </div>
    )
}
