import React from 'react';

import Class from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        title: 'yo'
    };
    activateEditMode () {
        this.setState({
            editMode: true
        });
       // this.forceUpdate()
    };
    deActivateEditMode () {
        this.setState({
            editMode: false
        });

    };
    render(){
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() => {this.activateEditMode()} }>{this.props.stat}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.stat}/>
                </div>
                }
            </>
        )
    }
};
export default ProfileStatus;