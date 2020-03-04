import React from 'react';
import Profile from './Profile';

import {getProfileThuncCreator, setUserProfile} from '../../redux/profile-reducer'
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component{

    componentDidMount(){

        let userId = this.props.match.params.userId;

        this.props.getProfileThuncCreator(userId);
    }

    render() {
        return(

            <Profile {...this.props} profile = { this.props.profile } />

        )
    }
}

let mapStateToProps = (state) => ({

    profile: state.profilePage.profile

});

let WithUrlDataContainerComponent = withRouter(ProfileContainer); // ВизРоутер добавляет информацию о строке запроса к компоненте

export default connect(mapStateToProps, { setUserProfile, getProfileThuncCreator })(WithUrlDataContainerComponent);