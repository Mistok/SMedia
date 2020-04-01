import React from 'react';
import {Class} from './Login.mudule.css';
import {Field, reduxForm} from "redux-form";



const LoginForm  = (props) => {
    return(<form onSubmit={ props.handleSubmit}>
        <div>
            <Field type="text" placeholder='login' name={'login'} component={'input'}/>
        </div>
        <div>
            <Field type="text" placeholder='Password' name={'password'} component={'input'}/>
        </div>
        <div>
            <label htmlFor="rememberBtn"><input id='rememberBtn' name={'remember'} type='Checkbox'/> Remember me</label>
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