import React from 'react'
import * as C from './styles'
import { BackgroundCircle } from '../CirclesBG/CirclesBG.style'
import Button from '../Button/Button'

export default function TextMark({handleClick, clicked}) {

  return (
    <C.Container top={clicked ? "-8rem" : "0"}>
      <img src="/beerIcon.png" alt="Deeps"/>
      <C.deepsH1>
        <h1>deeps</h1>
        <BackgroundCircle heightAndWidth=".85rem" bottom=".55rem"/>
        <BackgroundCircle heightAndWidth=".85rem" bottom=".55rem" left="3.7rem"/>
      </C.deepsH1>
      <p>BEERCAFE</p>
      <Button text="JOIN" event={handleClick}/>
    </C.Container>
  )
}
