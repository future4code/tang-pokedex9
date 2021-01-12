import React from 'react'
import loading from "../../img/loading.gif";
import { LoadingContainer } from './styles';


export default function Loading() {
    return (
        <LoadingContainer>
            <img src={loading} alt="Carregando..." />
        </LoadingContainer>
    )
}
