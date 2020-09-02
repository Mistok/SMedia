import React from 'react';
import Dialogs from './Dialogs';

import  {updateNewMessageBodyCreator, sendMessageCreator} from  '../../redux/dialogs-reducer';
import connect from "react-redux/es/connect/connect";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
         dialogsPage: state.dialogsPage,
    }
};
let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapDispatchToProps = (dispatch) => {
    return {

        sendMessage: () => { dispatch( sendMessageCreator() ) },

        updateNewMessageBody: (body) => { dispatch( updateNewMessageBodyCreator(body) ) }

    }
};

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )(AuthRedirectComponent) ;

export default DialogsContainer;