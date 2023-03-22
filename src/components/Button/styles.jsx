import styled from "styled-components";

export const Button = styled.button`
    width: 100px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color .2s;

    &:hover{
        background-color: #ffbc04;
    }
`