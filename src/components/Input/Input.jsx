import React from 'react'
import * as C from './styles'

export default function Input({type, name, id, placeholder}) {
  return (
    <C.Input type={type} name={name} id={id} placeholder={placeholder}/>
  )
}
