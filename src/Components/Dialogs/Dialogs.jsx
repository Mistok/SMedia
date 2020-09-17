import React from 'react';
import Class from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogsItem';
import Message from './DialogMessage/DialogsMessage';

import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const  Dialogs = (props) =>{


    let state = props.dialogsPage;

    let dialogElements =  state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> ) ;

    let messagesElements =  state.messages.map( message => <Message message={message.message} />);

     let addNewMessage = (values) => {

         props.sendMessage(values.newMessageBody);

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
            <div className = { Class.newMessageBlock } >

                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>

        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field
                    component={'textarea'}
                    name = 'newMessageBody'
                    className={ Class.newMessagetext }
                    validate={[ required, maxLength10,]}
                    cols="10"
                    rows="5"
                    placeholder='Enter your message'

                />
            </div>
            <div>

                <button className={ Class.sendBtn}  > Send </button>

            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);
export default Dialogs;