import React, { useState, useEffect } from 'react'
import './Navbar.css'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Brand, NavLink, Form, Input, Search, Image, ProfileHeader } from './NavbarElement.js'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Sidebar from '../Sidear/Sidebar.js'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navbar() {
      const [dropdownMenu, setdropdownMenu] = useState(true)
      const [clickNo, setclickNo] = useState(true)
      function dropdown() {
            var dropIcon = document.getElementById("arrowDown");
            console.log(dropIcon);
            var dropMenu = document.getElementById("dropMenu");
            console.log(dropMenu);
            if (dropdownMenu) {
                  dropIcon.addEventListener("click", function () {
                        dropMenu.style.opacity = "1";
                        dropMenu.style.visibility = "visible";
                  })
            }
            else {
                  dropIcon.addEventListener("click", function () {
                        dropMenu.style.opacity = "0";
                        dropMenu.style.visibility = "hidden";
                  })
            }
      }

      function hamrotate(e) {
            const sideElement = document.getElementById("sideElement");
            const event = document.getElementById("ham");
            const drag = document.getElementById("drag");
            if (clickNo) {
                  sideElement.style.display = "block";
                  event.style.transform = "rotate(180deg)";
                  drag.style.width = "3rem";
                  drag.style.height = "3rem";
                  event.style.color = "white";
                  event.style.display = "block"
                  setclickNo(false)
            }
            else {
                  sideElement.style.display = "none";
                  drag.style.width = "2rem";
                  drag.style.height = "2rem";
                  event.style.transform = "rotate(0deg)";

                  setclickNo(true)
            }
      }
      return (
            <div className="Navbar">
                  <nav>
                        <div className="hamburger">

                              <span id="ham">  <DragHandleIcon id="drag" onClick={event => hamrotate(event.target)} /></span>

                        </div>
                        <div className="brand_name">
                              <Brand>TOPOLOGY </Brand>
                        </div>
                        <div className="nav_Links">
                              <Router>

                                    <NavLink to="/" id="navLink_home" className="navlink_links">HOME</NavLink>
                                    <NavLink to="/new" className="navlink_links">NEW</NavLink>
                                    <NavLink to="/about" className="navlink_links">ABOUT</NavLink>

                              </Router>
                        </div>
                        <div className="Search">
                              <Form >
                                    <Input type="text" id="searchInput" placeholder="Search" />
                                    <button id="SearchButton" type="submit">
                                          <div id="searchIcon"><SearchIcon /></div>
                                    </button>
                              </Form>
                        </div>
                        <div className="profile">
                              <Avatar><h4 className="avatarName">A</h4></Avatar>
                              <ProfileHeader>Ankit Jangra</ProfileHeader>
                              <div id="arrowDown" onClick={(event) => {
                                    setdropdownMenu(!dropdownMenu);
                                    dropdown();
                              }}><ArrowDropDownIcon /></div>

                        </div>
                  </nav >
                  <div id="dropParent">
                        <div id="dropMenu" className="dropdownMenu">
                              <Router>
                                    <button id="myProfile"><a className="dropLink linkLink" href="/myProfile">My Profile</a></button>
                                    <button id="myBlog">   <a className="dropLink linkLink" href="/myBlogs">My Blogs</a></button>
                                    <button id="new">      <a className="dropLink linkLink" href="/new">New Blog</a></button>
                                    <button id="contact">  <a className="dropLink linkLink" href="/contact">Contact US </a></button>
                                    <button id="logOut">   <a className="dropLink linkLink" href="/logOut">Log Out</a></button>
                                    <button id="logIn">    <a className="dropLink linkLink" href="/logIn">Log In</a></button>
                                    <button id="register"> <a className="dropLink linkLink" href="/register">Register</a></button>
                              </Router>
                        </div>
                  </div>
                  <div id="sideElement">
                        <Sidebar />

                  </div>
            </div >

      )

}

export default Navbar
