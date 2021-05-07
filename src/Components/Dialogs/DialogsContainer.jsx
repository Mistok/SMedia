import React from 'react';
import Dialogs from './Dialogs';

import  {sendMessageCreator} from  '../../redux/dialogs-reducer';
import {connect} from "react-redux";

import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
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

export default compose(connect( mapStateToProps, mapDispatchToProps ), withAuthRedirect)(Dialogs) ;
