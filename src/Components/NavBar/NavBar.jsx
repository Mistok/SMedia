import React from 'react';
import Class from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {
    return (
        <div>
            <nav className={`${Class.navigation}`}>
                <div className={`${Class.NavLink_container}`}>
                    <NavLink to="/profile" activeClassName={`${Class.active}`}  className={`${Class.navLink}`}>Profile</NavLink>
                </div>
                <div className={`${Class.NavLink_container}`}>
                    <NavLink to="/dialogs" activeClassName={`${Class.active}`} className={`${Class.navLink}`}>Dialogs</NavLink>
                </div>
                <div className={`${Class.NavLink_container}`}>
                    <NavLink to="/users" activeClassName={`${Class.active}`} className={`${Class.navLink}`}>Users</NavLink>
                </div>
                <div className={`${Class.NavLink_container}`}>
                    <NavLink to="/News" activeClassName={Class.active} className={`${Class.navLink}`}>News
                    </NavLink>
                </div>
                <div className={`${Class.NavLink_container}`}>
                    <NavLink to="/music" activeClassName={Class.active} className={`${Class.navLink}`}>Music
                    </NavLink>
                </div>
                <div className={`${Class.NavLink_container}`}>
                    <NavLink to="/login" activeClassName={Class.active} className={`${Class.navLink}`}>Login
                    </NavLink>
                </div>
                <div className={`${Class.NavLink_container}`}>
                    <NavLink to="/settings" activeClassName={Class.active} className={`${Class.navLink}`}>Settings
                    </NavLink>
                </div> 
            </nav>
            <section className = { Class.friend_section }>

                <FriendsContainer store = { props.store } />

            </section>
        </div>
     )
};

export default Navbar