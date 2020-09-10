import React from 'react';


import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './Components/NavBar/NavBar';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";



const  App = (props) => {

    return (

        <BrowserRouter>

            <div className = "app-wrapper" >

                <HeaderContainer/>

                <Navbar/>

                <div className = 'app-wrapper-content'>

                    <Route exact path = '/dialogs'  render = { () =>

                        <DialogsContainer/> }

                    />

                    <Route path = '/profile/:userId?' render = { () =>

                        <ProfileContainer/> }
                    />
                    <Route path = '/users' render = { () =>

                        <UsersContainer/> }

                    />
                    <Route path = '/login' component={Login}
                    />
                </div>
            </div>

        </BrowserRouter>
    )
};

export default App;