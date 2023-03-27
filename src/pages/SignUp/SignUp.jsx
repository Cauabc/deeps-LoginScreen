import React from 'react'
import * as C from './styles'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BsGoogle, BsFacebook } from 'react-icons/bs'

export default function SignUp() {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderNav>
          <Link to={"/"}>
            <FaArrowLeft/>
          </Link>
          <p><Link to={"/signin"}>Login</Link> 
          </p>
        </C.HeaderNav>
        <h1>Sign Up</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit officiis repellendus amet consectetur elit officiis.</span>
      </C.Header>
      <C.FormArea>
        <Input type="text" name="username" id="username" placeholder="Username"/>
        <Input type="password" name="password" id="password" placeholder="Password"/>
        <Input type="email" name="email" id="email" placeholder="Email"/>
        <C.Button>Sign Up</C.Button>
        <C.OtherLogins>
            <BsGoogle/>
            <p>Create with Google</p>
            <FaArrowRight/>
        </C.OtherLogins>
        <C.OtherLogins>
            <BsFacebook/>
            <p>Create with Facebook</p>
            <FaArrowRight/>
        </C.OtherLogins>
      </C.FormArea>
    </C.Container>
  )
}
