
import React from 'react';
import Class from './Friends.module.css';

import Friend from './Friend/Friend';

const Friends = (props) => {
    let friend = props.friendsData.map ( f => <Friend name = { f.name } key={f.id} img = { f.img }/> );
    return (
        <div className = {`${Class.friends}`}>
           { friend }
        </div>
    )
};

export default Friends;