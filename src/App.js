import React from 'react';


import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from "./Components/NavBar/NavBar"
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {getAuthUserData} from "./redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import { withRouter } from "react-router";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/preloader/preloader";


class App extends React.Component {

    componentDidMount(){
        // debugger
        this.props.initializeApp()
     }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (

            <BrowserRouter>

                <div className="app-wrapper">

                    <HeaderContainer/>

                    <Navbar/>

                    <div className='app-wrapper-content'>

                        <Route exact path='/dialogs' component={DialogsContainer}/>

                        <Route path='/profile/:userId?' render={() =>

                            <ProfileContainer/>}
                        />
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/login' component={Login}
                        />
                    </div>
                </div>

            </BrowserRouter>
        )
    }
}

let mapStateToProps = (state) => ({
   initialized: state.app.initialized
});
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);