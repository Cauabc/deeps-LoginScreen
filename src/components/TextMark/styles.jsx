import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: ${({top}) => top};

    & img{
        width: 5rem;
    }

    & p{
        letter-spacing: 7px;
        font-weight: 400;
        color: #000;
        margin-top: .3rem;
        margin-bottom: 1rem;
    }

`

export const deepsH1 = styled.div`
    position: relative;

    & h1{
        position: relative;
        z-index: 2;
    }
`