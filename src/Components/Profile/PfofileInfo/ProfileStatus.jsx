import React from 'react';

import Class from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

class ProfileStatus extends React.Component{

    state = {
        editMode: false
    };

    render(){
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span>{this.props.stat}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input>{this.props.status2}</input>
                </div>
                }
            </>
        )
    }
};
export default ProfileStatus;