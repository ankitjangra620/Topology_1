import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
export const LoginBox = styled.div`
      min-width:40rem;
      min-height:55rem;
      border:1px solid black;
      border-radius:30px;
     background-color:#1E1E1E;
     box-shadow: rgb(38, 57, 77) 0px 0px 100px 30px;   
  
      
      `
export const LoginHeading = styled.h2`
      color:white;
      font-family: 'Stardos Stencil', cursive;
      display:flex;
      justify-content:center;
      letter-spacing:30px;
      margin-top:8px;

`
export const LoginForm = styled.form`
      margin-top:5rem;
`
export const EmailInput = styled.input`
    display:block;
      border:0px;   
      height:6rem;
      
      background-color: #1E1E1E;
      min-width:25rem;
      margin-left:auto;
      margin-right:auto;
      outline:0px;
      font-size:2rem;
      color:white;
      &:focus{
            border:0px;   
      }
      letter-spacing:5px;
  text-shadow:
      0 0 7px #fff,
      0 0 0px #fff,
      0 0 0px #fff,
      0 0 0px #ECECEC,
      0 0 0px #ECECEC,
      0 0 0px #ECECEC,
      0 0 0px #ECECEC,
      0 0 0px #ECECEC;
`
export const PasswordInput = styled.input`
      display:block;
      border:0;
      height:6rem;
      background-color: #1E1E1E;
      min-width:25rem;
      margin-left:auto;
      margin-top:0rem;
      margin-right:auto;
      outline:0px;
      letter-spacing:5px;
      font-size:2rem;
      color:white;
      text-shadow:
      0 0 7px #fff,
      0 0 0px #fff,
      0 0 0px #fff,
      0 0 0px #ECECEC,
      0 0 0px #ECECEC,
      0 0 0px #ECECEC,
      0 0 0px #ECECEC,
      0 0 0px #ECECEC;
`

export const FormButton = styled.button`
display:flex;
justify-content:center;
min-width:20rem;
font-size:1.6rem;
border-radius:30px;
min-height:3.4rem;
align-items:center;
background-color:#1E1E1E;
border:0px;
color:white;
letter-spacing:4px;
font-family: 'Stardos Stencil', cursive;
box-shadow: #343434 0px 0px 50px 5px;
transition:all .2s ease-in-out;
cursor:pointer;
&:hover{
      transform:scale(1.03);
}   
`
export const SignUpButton = styled.button`
display:flex;
justify-content:center;
min-width:20rem;
font-size:1.6rem;
border-radius:30px;
min-height:3.4rem;
align-items:center;
background-color:#093861;
border:0px;
color:white;
letter-spacing:4px;
font-family: 'Stardos Stencil', cursive;
margin-top:3rem;
transition:all .2s ease-in-out;
cursor:pointer;
&:hover{
      transform:scale(1.03);
}     
`
export const NavLink = styled(Link)`
      color:white;
      font-weight:300;
      font-size:1.3rem;
      text-decoration:none;


`