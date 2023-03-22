import { useState } from "react"
import styled from "styled-components"
import { BackgroundCircle } from "./components/CirclesBG/CirclesBG.style"
import TextMark from "./components/TextMark/TextMark"
import Welcome from "./components/Welcome/Welcome"

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  const [buttonClicked, setButtonClicked] = useState(false)

  const onClick = () => {
    setButtonClicked((props) => !props)
  }

  return (
    <Container>
      <TextMark handleClick={onClick} clicked={buttonClicked}/>

      {buttonClicked ? <Welcome/> : <BackgroundCircle bottom="-15rem" left="-15rem" heightAndWidth="35rem" mobileHeight="120vw"/>}
      {buttonClicked ? "" : <BackgroundCircle bottom="50%" left="70%" heightAndWidth="35rem" mobileHeight="180vw" leftMobile="60%"/>}
    </Container>
  )
}

export default App
