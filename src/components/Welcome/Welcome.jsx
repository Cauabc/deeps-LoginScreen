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

    & p {
        margin-top: 1rem;
    }

`

export default function Welcome() {
  return (
    <Container>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe cupiditate blanditiis sit inventore maxime officia iure necessitatibus debitis.</p>
    </Container>
  )
}
