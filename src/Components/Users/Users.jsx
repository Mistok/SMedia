import React from 'react';
import Class from  './users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../API/api";

let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

    let pages = [];

    for (let i = 1 ; i <= pagesCount ; i++  ){
        pages.push(i)
    }

    return <div className={Class.users_wrapper}>
        <div className={Class.paginationContainer}>
            {pages.map( p => {
                return <span onClick={
                    (e) => { props.onPageChanged(p)}
                }
                className={`${Class.paginationPage} ${props.currentPage === p && Class.selected}`}>{p}</span>

            })}
        </div>
        <div className={Class.users_container}>
        {
            props.users.map( u => <div className={Class.users_card} key={u.id}>

                <div className={Class.follow_section}>
                    <NavLink to={`/profile/${u.id}`}>
                        <div className={Class.users_photo}>
                            <img className = {Class.users_photo} src = {u.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg'} alt = "users photo"/>
                        </div>
                    </NavLink>
                    <div className={Class.follow_btn_container}>

                        { u.followed
                            ? <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                className={Class.follow_btn}
                                onClick = { () => {props.unFollow(u.id)} } >Unfollow</button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                className={Class.follow_btn}
                                onClick = { () => {props.follow(u.id) } } >Follow</button>
                        } </div>

                </div>

                <div className={Class.name_section}>
                    <div className={Class.users_name}>
                        {u.name}
                    </div>
                    <div className={Class.users_status}>
                        {u.status}
                    </div>
                </div>
            </div>)}
        </div>
    </div>
};

export default Users;