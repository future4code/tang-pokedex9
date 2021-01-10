import styled from "styled-components";

export const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px red solid;
    background-color: #ef372d;
    height: 12.5vh;
h1 {
    margin: 0;
    padding: 0;
    flex-grow: 1;
    text-align: center;
    font-size: 3em;
    color: #fbcb0e;
    text-shadow: 2px 2px grey;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0d5ba3;
}

img {
    width: 40px;

    margin: auto 10px;
}

div {
    max-width: 100px;
    margin: auto;
}

button {
    cursor: pointer;
    border: none;
    border-radius: 8px;
    border-right: 2px solid #8B0000;
    border-bottom: 2px solid #8B0000;
    background: none;
    color: white;
}

button:hover {
    border-left: 2px solid #8B0000;
    border-top: 2px solid #8B0000;
    border-right: none;
    border-bottom: none;
}

span {
    font-weight: bold;
    color: #fbcb0e;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #0d5ba3;
}
`