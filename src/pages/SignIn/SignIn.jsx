import React from 'react'
import * as C from './styles'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BsGoogle, BsFacebook } from 'react-icons/bs'

export default function SignIn() {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderNav>
          <Link to={"/"}>
            <FaArrowLeft/>
          </Link>
          <p><Link to={"/signup"}>Register</Link> 
          </p>
        </C.HeaderNav>
        <h1>Sign In</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit officiis repellendus.</span>
      </C.Header>
      <C.FormArea>
        <Input type="text" name="username" id="username" placeholder="Username"/>
        <Input type="password" name="password" id="password" placeholder="Password"/>
        <span>Forgot Password?</span>
        <C.Button>Sign In</C.Button>
        <C.OtherLogins>
            <BsGoogle/>
            <p>Continue with Google</p>
            <FaArrowRight/>
        </C.OtherLogins>
        <C.OtherLogins>
            <BsFacebook/>
            <p>Continue with Facebook</p>
            <FaArrowRight/>
        </C.OtherLogins>
      </C.FormArea>
    </C.Container>
  )
}
