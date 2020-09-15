import React from 'react';
import Dialogs from './Dialogs';

import  {updateNewMessageBodyCreator, sendMessageCreator} from  '../../redux/dialogs-reducer';
import connect from "react-redux/es/connect/connect";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};


let mapDispatchToProps = (dispatch) => {
    return {

        sendMessage: (sendMessageBody) => { dispatch( sendMessageCreator(sendMessageBody) ) },

    }
};


//
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )(AuthRedirectComponent) ;

export default compose(connect( mapStateToProps, mapDispatchToProps ), withAuthRedirect)(Dialogs) ;