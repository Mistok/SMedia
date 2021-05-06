import React from 'react';


import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from "./Components/NavBar/NavBar"
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import { withRouter } from "react-router";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/preloader/preloader";
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount(){
        this.props.initializeApp()
     }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
                <div className="app-wrapper">

                    <HeaderContainer/>

                    <Navbar/>

                    <div className='app-wrapper-content'>
                        <Route exact path='/dialogs' render={() =>{
                            return <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>}}/>
                        <Route path='/profile/:userId?' render={() =>{
                            return <React.Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </React.Suspense>}}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/login' component={Login}/>
                    </div>
                </div>
        )
    }
}

let mapStateToProps = (state) => ({
   initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiAppJs = (props) => {
    return <BrowserRouter>
            <Provider store = { store }>
                <AppContainer />
            </Provider>
        </BrowserRouter>
};

export default SamuraiAppJs;