import React from 'react';
import Class from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogsItem';
import Message from './DialogMessage/DialogsMessage';
import {Redirect} from "react-router-dom";


const  Dialogs = (props) =>{


    let state = props.dialogsPage;

     let dialogElements =  state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> ) ;

     let messagesElements =  state.messages.map( message => <Message message={message.message} />);

     let newMessageBody = state.newMessageBody;


   // let newPostElement = React.createRef();

     let onSendMessage = () => {

         props.sendMessage()

     };

     let onNewMessageChange = (event) => {

         let body = event.target.value;

         props.updateNewMessageBody(body);

     };

     if(!props.isAuth){
         return <Redirect to={"/login"} />
     }

    return (
        <div className = { Class.dialogWrapper }>

            <div className={Class.dialogs}>

                <div className={Class.dialog_items}>

                    {dialogElements}

                </div>

                <div className = { Class.message }>

                    <div>  {messagesElements} </div>

                </div>

            </div>
            <div className = { Class.newMessageBlock } >
                <div>

                    <textarea className={ Class.newMessagetext } /*ref = { newPostElement }*/ onChange = { onNewMessageChange } name="message" id="" cols="10" rows="5" placeholder='Enter your message' value = { newMessageBody }/>

                </div>
                <div>

                    <button className={ Class.sendBtn} onClick = { onSendMessage } > Send </button>

                </div>

            </div>

        </div>
    )
};

export default Dialogs;