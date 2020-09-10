import React from 'react';
import {Class} from './Login.mudule.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";

const LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} component={'input'} type="text" placeholder='login'/>
            </div>
            <div>
                <Field name={'password'} component={'input'} type="password" placeholder='password'/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} id={'remember'}  type={'checkbox'}/>
                <label htmlFor="remember">{'remember me'}</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log('submit')
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};


export default Login;