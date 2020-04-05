import React from 'react';
import Class from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogsItem';
import Message from './DialogMessage/DialogsMessage';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) =>{

    let state = props.dialogsPage;

     let dialogElements =  state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> ) ;

     let messagesElements =  state.messages.map( message => <Message message={message.message} />);

    let addNewMessage = (values) =>{
        //console.log(values);
        props.sendMessage(values.newMessageBody)
    };

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
            <AddMessageForm onSubmit={addNewMessage}/>

        </div>
    )
};



export default Dialogs;