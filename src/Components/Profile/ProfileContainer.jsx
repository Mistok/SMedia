import React from 'react';
import Profile from './Profile';

import {getProfileThuncCreator, getStatus, updateStatus} from '../../redux/profile-reducer'
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount(){

        let userId = this.props.match.params.userId;

        this.props.getProfileThuncCreator(userId);

        this.props.getStatus(userId);
    }

    render() {



        return(

            <Profile {...this.props} profile = { this.props.profile } status={this.props.status} updateStatus={this.props.updateStatus}/>

        )
    }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({

    profile: state.profilePage.profile,

    status: state.profilePage.status

});

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent); // ВизРоутер добавляет информацию о строке запроса к компоненте


export default compose(
    connect(mapStateToProps, { getProfileThuncCreator, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);