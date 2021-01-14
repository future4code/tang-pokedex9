import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToHomePage, goToPokedexPage } from '../../Routes/coordinators';
import { HeaderContainer } from './styles';
import Home from '../../img/home.png'
import Pokedex from '../../img/pokedex.png'
import GoBack from '../../img/back.png'

export default function Header(props) {
    const history = useHistory()
    const pageName = props.pageName

    const renderHeader = () => {
        if (pageName === "Pokemon List") {
            return (
                <HeaderContainer>
                    <div>
                        <button onClick={() => goToPokedexPage(history)}> 
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
                            <img src={GoBack} />
                            <span>Return</span>
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
