import React, { useContext } from 'react'
import PokeContext from '../../contexts/PokeContext'
import { PopUpContainer, PopUpContent } from './styles'

export default function PopUp(props) {
    const data = useContext(PokeContext)

    const handleClick = () => {
        const toggle = !data.popUp
        data.setPopUp(toggle)
    }

    return (
        <PopUpContainer>
            <PopUpContent>
                <p>{props.message}</p>
                <button onClick={handleClick}> OK </button>
            </PopUpContent>
        </PopUpContainer>
    )
}
