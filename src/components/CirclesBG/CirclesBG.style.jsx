import styled from "styled-components";

export const BackgroundCircle = styled.div`
    background-color: #ffbc04;
    height: ${({heightAndWidth}) => heightAndWidth};
    width: ${({heightAndWidth}) => heightAndWidth};
    border-radius: 50%;
    position: absolute;
    bottom: ${({bottom}) => bottom};
    left: ${({left}) => left};

    @media only screen and (max-width:600px){
        height:${({mobileHeight}) => mobileHeight};
        width: ${({mobileHeight}) => mobileHeight};
        left: ${({leftMobile}) => leftMobile};
    }
`