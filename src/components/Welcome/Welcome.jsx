import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #ffbc04;
    width: 100vw;
    height: 45vh;
    border-radius: 50px 50px 0 0;
    position: absolute;
    bottom: 0;
    padding: 30px 15px;

    & h1, & p {
        text-align: center;
        font-weight: bold;
    }

    & h1 {
        font-size: 5vw;
    }

    & p {
        font-size: 4vw;
        margin-top: 1rem;
    }
`

const SignForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5vh;
`

const Button = styled.button`
    background-color: ${({backgroundColor}) => backgroundColor};
    border: 0;
    width: 150px;
    height: 60px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 1rem;

    & a {
        text-decoration: none;
        color: ${({color}) => color};
    }
`

export default function Welcome() {
  return (
    <Container>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe cupiditate blanditiis sit inventore maxime officia iure necessitatibus debitis.</p>
        <SignForm>
            <Button backgroundColor="#000" color='#fff'>
                <a href="/signin">Sign In</a>
            </Button>
            <Button backgroundColor="#fff" color='#000'>
                <a href="/signup">Sign Up</a>
            </Button>
        </SignForm>
    </Container>
  )
}
