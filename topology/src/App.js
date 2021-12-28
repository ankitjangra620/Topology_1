import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './LogIn/Login.js';
import Register from './Register/Register';
import Navbar from './Navbar/Navbar';
import Blogs from './Blogs/Blogs.js'
import Forgot from './Forgot/Forgot.js'
import Logout from './Logout.js'
function App() {
  return (
    <div className="App">

      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/forgot' component={Forgot} />
          <Route exact path='/home' component={Blogs} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
