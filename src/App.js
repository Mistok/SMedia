import React from 'react';
import {compose} from 'redux';
import {connect} from "react-redux";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

import './App.css';

import Navbar from './Components/NavBar/NavBar';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

import getAuthUserData from './redux/auth-reducer.js'

class App extends React.Component {
    
    // componentDidMount(){
    //     debugger
    //     this.props.getAuthUserData()
    // }
    render(){
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

                        <ProfileContainer /> }
                    />
                    <Route path = '/users' render = { () =>

                        <UsersContainer/> }

                    />
                    <Route path = '/login' render = { () =>

                        <Login/> }

                    />

                </div>
            </div>

        </BrowserRouter>)
    };
}
export default connect( null, {getAuthUserData})(App);