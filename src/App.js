import React, { Component } from 'react';


import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer";



const  App = (props) => {

    return (

        <BrowserRouter>

        <div className = "app-wrapper" >

            <Header/>

            <Navbar/>

            <div className = 'app-wrapper-content'>

                <Route exact path = '/dialogs'  render = { () =>

                    <DialogsContainer/> }

                />

                <Route path = '/profile' render = { () =>

                    <Profile/> }
                />
                <Route path = '/users' render = { () =>

                    <UsersContainer/> }

                />
            </div>
        </div>

    </BrowserRouter>)
};

    export default App; 