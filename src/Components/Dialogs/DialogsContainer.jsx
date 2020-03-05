import React from 'react';
import Dialogs from './Dialogs';

import  {updateNewMessageBodyCreator, sendMessageCreator} from  '../../redux/dialogs-reducer';
import connect from "react-redux/es/connect/connect";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
         dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {

    return {

        sendMessage: () => { dispatch( sendMessageCreator() ) },

        updateNewMessageBody: (body) => { dispatch( updateNewMessageBodyCreator(body) ) }

    }
};





export default compose(
    connect( mapStateToProps, mapDispatchToProps ),
    withAuthRedirect
)(Dialogs);