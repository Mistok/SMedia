import React from 'react';
import {Class} from './Login.mudule.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../Utils/Validators/validators";
import connect from "react-redux/es/connect/connect";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const LoginForm  = (props) => {
    return(<form onSubmit={ props.handleSubmit}>
        <div>
            <Field type="text" validate={[requiredField]} placeholder='Email' name={'email'} component={Input}/>
        </div>
        <div>
            <Field type="password" validate={[requiredField]} placeholder='Password' name={'password'} component={Input}/>
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
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return<div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit = {onSubmit} />
    </div>
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);