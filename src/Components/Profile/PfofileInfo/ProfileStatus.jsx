import React from 'react';

import Class from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {

        this.setState({
            editMode: true
        });
       // this.forceUpdate()
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false

        });
        this.props.updateStatus(this.state.status)
    };
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    };
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
        console.log('prevProps: ', prevProps);
        console.log('prevState: ', prevState);

        console.info('componentDidUpdate')
    }
    render(){
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick= {this.activateEditMode} >{this.props.status || '----'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                }
            </>
        )
    }
};
export default ProfileStatus;