
import React from 'react';
import Class from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className = {`${Class.friend}`}>

            <div className = {`${Class.friend_wrapper}`}>

                <img className = {`${Class.friend_ava}`} src={`../../../../../img/${props.img}`}  alt={`${props.name}'s photo`}/>
                
                <p className = {`${Class.friend_name}`}> { props.name} </p>

            </div>
            
        </div>
    )
};

export default Friend;


