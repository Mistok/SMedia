import React from 'react';
import {Class} from './Login.mudule.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} component={Input} type="text" placeholder='login' validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} type="password" placeholder='password' validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'Input'} id={'remember'}  type={'checkbox'}/>
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