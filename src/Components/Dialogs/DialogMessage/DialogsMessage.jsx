import React from 'react';
import Class from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={Class.message}>{props.message}</div>
    )
};


export default Message;