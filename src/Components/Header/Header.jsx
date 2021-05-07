import React from 'react';
import logo from '../../logo.svg';
import Class from './Header.module.css';
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const Header = (props) => {

    return (
        <header className={Class.header}>
            <img src={logo} alt="logo" className={Class.header_img}/>
            <div className={Class.login_block}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'} activeClassName={`${Class.active}`}>Login</NavLink>}

            </div>
        </header>
    )
};

export default connect(null, {logout})(Header)