import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';


import Header from './layouts/Header';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';

import UserList from './components/Admin/User/Userlist';
import Homepage from './components/Admin/User/Homepage';

import DeleteUser from './components/Admin/User/DeleteUser';
import AdminHeader from './layouts/AdminHeader';
import Logout from './components/Admin/User/logout';
import EditUser from './components/Admin/User/EditUser';
import ProductList from './components/Admin/User/Productlist';


axios.defaults.baseURL=" ";
var user="";
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  user=obj.username;
}
// localStorage.removeItem("user");


ReactDOM.render(
  <React.StrictMode>
    <Router>

      {
         user=="" &&
        <Header/>
      }

      {user!="" &&
        <AdminHeader/>
      }
      
      
      
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/homepage">
          <Homepage />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>



        <Route exact path="/Users/List">
          < UserList/>
        </Route>
 



        <Route exact path="/delete/user/:id">
          < DeleteUser/>
        </Route>


        <Route exact path="/logout/:id">
          < Logout/>
        </Route>

      <Route exact path="/edit/user/:id">
        <EditUser/>
      </Route>
      
      <Route exact path="/Product/list">
          < ProductList/>
        </Route>




         {/* Admins Route End */}
      </Switch>
      {/* <Footer/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
