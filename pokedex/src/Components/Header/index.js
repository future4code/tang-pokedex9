import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToHomePage, goToPokedexPage } from '../../Routes/coordinators';
import { HeaderContainer } from './styles';
// import Change from '../../img/change.png'
import Home from '../../img/home.png'
import Pokedex from '../../img/pokedex.png'
import GoBack from '../../img/back.png'

export default function Header(props) {
    const history = useHistory()
    const pageName = props.pageName

    const renderHeader = () => {
        if (pageName === "Lista de Pokemons") {
            return (
                <HeaderContainer>
                    <div>
                        <button onClick={() => goToPokedexPage(history)}> 
                            {/* <img src={Change} />  */}
                            <img src={Pokedex} />
                            <span>Pokedex</span>
                        </button>
                    </div>
                    <h1>{pageName}</h1>
                </HeaderContainer>
            )
        } else if (pageName === "Pokedex") {
            return (
                <HeaderContainer>
                    <div>
                        <button onClick={() => goToHomePage(history)}> 
                            {/* <img src={Change} />  */}
                            <img src={Home} />
                            <span>Home</span>
                        </button>
                    </div>
                    <h1>{pageName}</h1>
                </HeaderContainer>
            )
        } else {
            return (
                <HeaderContainer>
                    <div>
                        <button onClick={() => history.goBack()}> 
                            {/* <img src={Change} />  */}
                            <img src={GoBack} />
                            <span>Voltar</span>
                        </button>
                    </div>
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
