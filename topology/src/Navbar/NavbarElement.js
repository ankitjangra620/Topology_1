import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
export const ProfileHeader = styled.h3`
      color:white;
      font-size:1.5rem;
      font-weight:600;
      &:hover{

      }
      display:flex;
      align-items:center;
      padding-left:1.5rem;
      max-width:10rem;
      min-width:5rem;      
`

export const Search = styled(SearchIcon)`
      color:white;
      background-color:white;
`
export const Brand = styled.h2`
      color:#707070;
      letter-spacing:2rem;
      font-size:1.2rem;
      display: flex;
      align-items: center;
      margin-left:8rem;
      font-weight:900;
      transition: all .2s ease-in;
      font-family: 'Stardos Stencil', cursive;
      &:hover{
            color:#e0e0e0;
           transform:scale(1.1);
      }
`
export const NavLink = styled.a`
      color:#949494;
      lettter-spacing:1rem;
      forn-size:1rem;
      font-family: 'Stardos Stencil', cursive;
      font-weight:400;
      &.active{
            color:white;
            font-weight:800;
      }
      transition : all .2s ease-in-out;
      cursor:pointer;
      &:hover{
            color:#e0e0e0;
           transform:scale(1.05);
      }
`
export const Form = styled.form`
  
`
export const Input = styled.input`
      type:text;
      text-align:right;
      &:focus{
      border: 3px solid #91f2f2;
      }
      border-radius:3rem;
      margin-top:0;
      top:0
     
`
export const Image = styled.image`
      
`