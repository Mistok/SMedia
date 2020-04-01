import React from 'react';
import Class from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogsItem';
import Message from './DialogMessage/DialogsMessage';
import {Field, reduxForm} from "redux-form";
const  { input, select, textarea }  = React;




const Dialogs = (props) =>{

    let state = props.dialogsPage;

     let dialogElements =  state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> ) ;

     let messagesElements =  state.messages.map( message => <Message message={message.message} />);

     let newMessageBody = state.newMessageBody;

     let onSendMessage = () => {

         props.sendMessage()

     };

     let onNewMessageChange = (event) => {

         let body = event.target.value;

         props.updateNewMessageBody(body);

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
            <AddMessageReduxForm/>

        </div>
    )
};

const AddMessageForm = (props) => {
    return(<form
        onSubmit={props.handleSubmit}
        className = { Class.newMessageBlock } >
        <div>

            <Field
                component='textarea'
                className={ Class.newMessagetext }

                name="message"
                id="" cols="10" rows="5"
                placeholder='Enter your message'
                /* value = { newMessageBody }/>*/
            />
        </div>
        <div>

            <button
                className={ Class.sendBtn}

            > Send </button>

        </div>

    </form>)
};

let AddMessageReduxForm = reduxForm({
    form: 'addMessageForm'
})(AddMessageForm);
export default Dialogs;