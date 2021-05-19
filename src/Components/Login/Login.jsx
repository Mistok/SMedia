import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import style from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return <>
        <form  onSubmit={handleSubmit}>
            <div>
                {createField('Email', 'email',  [requiredField], Input)}
                {createField('Password', 'password',  [requiredField], Input, {type: "password"})}
                {createField(null, 'rememberMe',  [], Input, {type: "checkbox"})}
            </div>
            {captchaUrl && <div>
                <img src={captchaUrl} alt={'captcha'}/>
                {createField("symbols from captcha", "captcha",  [requiredField], Input, {})}
            </div> }
            {/*{captchaUrl && createField("symbols from captcha",'captcha',[requiredField()], Input, {})}*/}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };
    if(props.isAuth) {
        return < Redirect to={"/profile"} />
    }
    return (
        <>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login, logout})(Login) ;