import React from 'react'
import { Brand, NavLink, Form, Input, Search, Image, ProfileHeader } from '../Navbar/NavbarElement.js'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Sidebar.css"
function Sidebar() {
      return (
            <div className="sidebar">
                  <div className="SearchSidebar">
                        <div className="sideProfile">

                              <ProfileHeader id="sideProfileTitle">Ankit Jangra</ProfileHeader>


                        </div>
                        <Form className="sideForm">
                              <Input type="text" id="searchInput" placeholder="Search" />
                              <button id="SearchButton" type="submit">
                                    <div id="searchIcon"><SearchIcon /></div>
                              </button>
                        </Form>
                        <div className="sideCenter">
                              <div className="sideLinks">
                                    <Router>

                                          <span className="sideLink" id="sideLink1"><NavLink className="linkLink" href="/home" className="sideNavLink" id="sideHome" >HOME</NavLink></span>
                                          <span id="sideLink2" className="sideLink"><NavLink className="linkLink" href="/new" className="sideNavLink" id="sideNew" >NEW</NavLink></span>
                                          <span id="sideLink3" className="sideLink"> <NavLink className="linkLink" href="/about" className="sideNavLink" id="sideAbout">ABOUT</NavLink></span>
                                          <span id="sideLink4" className="sideLink"> <NavLink className="linkLink" href="/profile" className="sideNavLink" id="sideProfile">PROFILE</NavLink></span>
                                          <span id="sideLink5" className="sideLink"> <NavLink className="linkLink" href="/allblogs" className="sideNavLink" id="sideBlogs">BLOGS</NavLink></span>
                                          <span id="sideLink6" className="sideLink"> <NavLink className="linkLink" href="/contact" className="sideNavLink" id="sideContact">CONTACT</NavLink></span>
                                          <span id="sideLink7" className="sideLink"> <NavLink className="linkLink" href="/login" className="sideNavLink" id="sideLogin">LOG IN</NavLink></span>
                                          <span id="sideLink8" className="sideLink"> <NavLink className="linkLink" href="/logout" className="sideNavLink" id="sideLogout">LOG OUT</NavLink></span>
                                          <span id="sideLink9" className="sideLink"> <NavLink className="linkLink" href="/register" className="sideNavLink" id="sideRegister">REGISTER</NavLink></span>


                                    </Router>
                              </div>
                        </div>
                  </div>

            </div>
      )
}

export default Sidebar
