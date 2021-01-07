import React from 'react'
import { useHistory } from 'react-router-dom'
import BackButton from '../../Components/BackButton'
import { goToHomePage } from '../../Routes/coordinators'
import snorlax from "../../img/snorlax03.jpg";
import { ErrorPageContainer , ImgContainer } from './styles';

export default function ErrorPage() {
    const history = useHistory()

    return (
        <ErrorPageContainer>
            <h1>Erro 404</h1>
            <ImgContainer>
                <img src={snorlax} alt="snorlax" />
            </ImgContainer>
            <div>
                <button onClick={() => goToHomePage(history)}>Home</button>
                <BackButton/>     
            </div>
        </ErrorPageContainer>
    )
}