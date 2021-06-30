import React from 'react';
import Class from '../Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return(<form
        onSubmit={props.handleSubmit}
        className = { Class.newMessageBlock } >
        <div>

            <Field
                component={Textarea}
                className={ Class.newMessagetext }
                validate={[requiredField, maxLength50]}
                name="newMessageBody"
                placeholder='Enter your message'
            />
        </div>
        <div>

            <button
                className={ Class.sendBtn}

            > Send </button>

        </div>

    </form>)
};

export default reduxForm({
    form: 'addMessageForm'
})(AddMessageForm);
