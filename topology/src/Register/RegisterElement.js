import styled from "styled-components"
export const RegisterBox = styled.div`
min-width:40rem;
min-height:65rem;
border:1px solid black;
border-radius:30px;
background-color:#1E1E1E;
box-shadow: rgb(38, 57, 77) 0px 0px 100px 30px;   

`
export const ImageInput = styled.input`
      color:white;
      visibility:none;
      display:none;
     justify-content:center;

`

export const RegisterForm = styled.form`
       
     margin-left:auto;
     margin-right:auto;
      
`
export const RegistserLabel = styled.label`
      color:white;
      cursor:pointer;
      border:0px solid white;
      border-radius:100%;
      min-width:100%;
`
export const RegisterImage = styled.img`
border:1px solid #1E1E1E;
border-radius:100%;
      width:10rem;
      height:10rem;
      position:absolute;    
      overflow:visible;
      transition:all 0.2s ease-in-out;
      z-index:0;
      margin-left:15rem;
      margin-top:2%;
`

export const NameInput = styled.input`
display:block;
border:0px;   
margin-top:2rem;
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

export const OtpInput = styled.input`
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
export const Notification = styled.h2`
      display :block;
      border:0.5px solid red;
      border-radius:30rem;
      padding:1.3rem;
      color:red;
      display:flex;
      justify-content:center;
      margin:1rem;
     font-weight:100;
     
`
