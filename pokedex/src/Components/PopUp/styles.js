import styled from 'styled-components'

export const PopUpContainer = styled.div `
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopUpContent = styled.div `
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid black;
    border-radius: 8px;
    max-width: 600px;
    min-width: 200px;
    padding: 8px;
p {
    margin: 16px;
    font-weight: 600;
}
button{
    width: 80px;
    height: 36px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 600;
    padding:4px 16px;
    border: 4px solid black;
    background-color: whitesmoke;
    border-radius: 4px;
} 
button:hover {
    background-color: lightgray;
}
button:active {
    font-size: 14px;
}
`