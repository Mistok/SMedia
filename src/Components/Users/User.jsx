
import React from 'react';
import Class from  './users.module.css';
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unFollow, follow}) => {

    
    return  <div className={Class.users_card}>

                <NavLink to={`/profile/${user.id}`}>
                    <img className = {Class.users_photo} src = {user.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg'} alt = "users photo"/>
                </NavLink>
                <div className={Class.follow_btn_container}>

                    { user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={Class.follow_btn}
                            onClick = { () => {unFollow(user.id)} } >Unfollow</button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={Class.follow_btn}
                            onClick = { () => {follow(user.id) } } >Follow</button>
                    }
                </div>


                <div className={Class.name_section}>
                    <div className={Class.users_name}>
                        {user.name}
                    </div>
                    <div className={Class.users_status}>
                        {user.status}
                    </div>
                </div>

        </div>

};
export default User;