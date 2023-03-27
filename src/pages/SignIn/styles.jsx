import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffbc04;
    padding-top: 2rem;
`

export const Header = styled.header`
    height: 60vw;
    width: 100vw;
    padding-left: 2rem;
    padding-right: 2rem;

    a{
        text-decoration: none;
        color: #000;
    }

    h1{
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    span{
        font-weight: bold;
        font-size: 4vw;
        width: 100%;
    }
`

export const HeaderNav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;

    p{
        font-weight: bold;
    }
`

export const FormArea = styled.div`
    border-radius: 40px 40px 0 0;
    height: 85vh;
    width: 100vw;
    background-color: #fff;
    box-shadow: 0px 0px 50px -20px #000;
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;

    span{
        text-align: end;
        cursor: pointer;

        &:hover{
            color: #ffbc04;
        }
    }
`

export const Button = styled.button`
    width: 100%;
    border: 0;
    border-radius: 16px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    height: 5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;

    &:hover{
        color: #000;
        background-color: #ffbc04;
    }
`

export const OtherLogins = styled.div`
    width: 100%;
    height: 15vw;
    border-radius: 15px;
    box-shadow: 3px 5px 10px -4px;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-around;
    cursor: pointer;
    
    p{
        font-weight: bold;
    }
`