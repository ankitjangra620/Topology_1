import styled from "styled-components";

//Making the Blog div in which the blog reside

export const BlogBox = styled.div`
      background-color:#141414;
      min-width:60vw;
      max-width:60vw;
      margin-top:3rem;
      margin-left:auto;
      margin-right:auto;
      min-height:10rem;
      max-height:70vh;
      border-radius:3rem;
      color:white;
      box-shadow: rgb(38, 57, 77) 0px 0px 70px 5px;   
      overflow:scroll;
      resize:vertical;
     
      overflow-x: hidden;
    
      
`

//making the name of the user heading

export const Username = styled.h1`
      color:white;
      font-size:2rem;
      letter-spacing:5px;
      font-family: 'Stardos Stencil', cursive;
      margin-top:1rem;
`
export const BlogDate = styled.h1`
      color:white;
      font-size: 1rem;
      font-family: 'Stardos Stencil', cursive;
      float:right;
`

export const BlogTitle = styled.h1`
      color:white;
      font-size: 1.7rem;
      font-family: 'Stardos Stencil', cursive;
      font-weight:100;
      margin-top:3px;
`
export const BlogText = styled.h1`
      color:#C1C1C1;
      font-size:1.6em;
      font-weight:100;
      letter-spacing:1px;
      margin-top:1.4rem;
      margin-bottom:1.4rem;
`