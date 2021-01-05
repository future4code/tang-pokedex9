import React from 'react'
import { useHistory } from 'react-router-dom'


export default function BackButton () {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return (
        <button onClick={goBack}>
            Voltar
        </button>
    )
}
