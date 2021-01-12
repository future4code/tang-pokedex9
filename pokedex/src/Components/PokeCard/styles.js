import styled from "styled-components";

export const CardContainer = styled.div `
    background: radial-gradient(
        circle, 
        rgba(255,255,255,0) 13%, 
        rgba(0,212,255,1) 50%,
        rgba(9,36,121,1) 100%);    
    box-shadow: 4px 4px 8px rgba(143,143,143,1);
    border-radius: 4px;
    border: 2px solid black;
    width: 240px;
    text-align: center;
    height: 360px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
img{
    width: 60%;
}
h2 {
    font-size: 1.8em;
    color: #fbcb0e;
    text-shadow: 2px 2px 4px grey;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0d5ba3;
}
`

export const OptionsContainer = styled.div `
    height: 24%;
    width: 100%;
` 

export const BtnContainer = styled.div`
        height: 50%;
        display: flex;
        border-top: 2px solid black;
        border-radius: 0 0 4px 4px;
    button{
        border: none;
        height: 100%;
        cursor: pointer;
        background-color: rgba(0,0,0,0.30);
        color: #fbcb0e;
        width: 50%;
        padding: 0;
        border-radius:  0 0 0 4px;
    }
    button:hover {
        background-color: rgba(0,0,0,0.50);
    }
    button:last-child {
        border-radius:  0 0 4px 0;
        border-left: 2px solid black;
    }
`

export const BattleBtn = styled.button `
    border: none;
    height: 50%;
    width: 100%;
    cursor: pointer;
    background-color: rgba(300,0,0,0.40);
    color: #fbcb0e;
    border-top: 2px solid black;
:hover {
    background-color: rgba(300,0,0,0.55);
}
`


