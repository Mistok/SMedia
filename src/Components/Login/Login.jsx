import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import style from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <>
        <form onSubmit={handleSubmit}>
            <div>
                {createField('Email', 'email',  [required], Input)}
                {createField('Password', 'password',  [required], Input, {type: "password"})}
                {createField(null, 'rememberMe',  [required], Input, {type: "checkbox"})}
            </div>
            <div>
                <Field name={'password'} component={Input} type="password" placeholder='password' validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'Input'} id={'remember'}  type={'checkbox'}/>
                <label htmlFor="remember">{'remember me'}</label>
            </div>
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>
            }
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
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if(props.isAuth) {
        return < Redirect to={"/profile"} />
    }
    return (
        <>
            <div>

            </div>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, logout})(Login) ;