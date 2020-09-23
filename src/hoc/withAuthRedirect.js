import {Redirect} from "react-router";
import React from "react";
import connect from "react-redux/es/connect/connect";

let mapStateToPropsForRedirect = (state) => ({

    isAuth: state.auth.isAuth

});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component{

        render(){

            if( !this.props.isAuth ) return <Redirect to={`/login`}/>;

            return <Component {...this.props}/>

        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

};