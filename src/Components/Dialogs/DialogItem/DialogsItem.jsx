import React from 'react';
import Class from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={Class.dialog + ' ' + Class.active}>
            <NavLink  to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};



export default DialogItem;