import styled from "styled-components";

export const DetailsContainer = styled.div `
    border: 1px red solid;
    display: flex;
    flex-wrap: wrap;
    min-height: 85vh;
    justify-content: space-evenly;
    align-items: center;
`

export const InfoContainer = styled.div `
    text-align: center;
    height: 75vh;
    max-width: 30vw;
    min-width: 300px;
    background: radial-gradient(
        circle, 
        rgba(255,255,255,0) 13%, 
        rgba(0,212,255,1) 50%,
        rgba(9,36,121,1) 100%);    
    box-shadow: 4px 4px 8px rgba(143,143,143,1);
    border-radius: 4px;
    border: 2px solid black;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
img{
    width: 60%;
}
h3 {
    font-size: 1.5em;
    margin: 0;
    color: #fbcb0e;
    text-shadow: 2px 2px 4px grey;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0d5ba3;
}

p {
    margin: 2px;
    font-weight: 600;
}

`

export const TypeContainer = styled.div `
    width: 80%;
    display: flex;
    justify-content: space-evenly;
`