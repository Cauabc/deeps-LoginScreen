import React from 'react'
import * as C from './styles'

export default function Button({text, event}) {

  return (
    <C.Button onClick={event}>
        {text}
    </C.Button>
  )
}
