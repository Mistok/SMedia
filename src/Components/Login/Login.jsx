import React from 'react';
import {Class} from './Login.mudule.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../Utils/Validators/validators";



const LoginForm  = (props) => {
    return(<form onSubmit={ props.handleSubmit}>
        <div>
            <Field type="text" validate={[requiredField]} placeholder='login' name={'login'} component={Input}/>
        </div>
        <div>
            <Field type="text" validate={[requiredField]} placeholder='Password' name={'password'} component={Input}/>
        </div>
        <div>
            <label htmlFor="rememberBtn"><Field component={Input} id='rememberBtn' name={'remember'} type='Checkbox'/> Remember me</label>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>)
};




let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    };
    return<div>

        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit = {onSubmit} />
    </div>
};



export default Login;