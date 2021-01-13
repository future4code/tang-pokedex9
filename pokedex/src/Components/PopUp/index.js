import React from 'react'
import { PopUpContainer, PopUpContent } from './styles'

export default function PopUp(props) {
    return (
        <PopUpContainer>
            <PopUpContent>
                <p>{props.message}</p>
                <button onClick={props.onClickBtn}> OK </button>
            </PopUpContent>
        </PopUpContainer>
    )
}
