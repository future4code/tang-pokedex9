import React from 'react'
import loading from "../../img/loading.gif";


export default function Loading() {
    return (
        <div>
            <img src={loading} alt="Carregando..." />
        </div>
    )
}
