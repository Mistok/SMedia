<<<<<<< HEAD
import React from 'react';

import Class from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

class ProfileStatus extends React.Component{

    state = {
=======

import React from "react";

class ProfileStatus extends React.Component{

    state={
>>>>>>> V4
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {

        this.setState({
<<<<<<< HEAD
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
=======
            editMode: true,
        })

    };
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);

    };
    onStatusChange = (e) => {
>>>>>>> V4
        this.setState({
            status: e.currentTarget.value
        })
    };
<<<<<<< HEAD
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
=======

    componentDidUpdate = (prevProps, prevState)  => {

        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status});
        }

        let a = this.props;
        let b = this.state;
    };

    render(){
        return(
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >
                            {this.props.status || 'no status'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange }
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}
                            placeholder={this.state.status}
                        />
                    </div>
>>>>>>> V4
                }
            </>
        )
    }
<<<<<<< HEAD
};
=======
}

>>>>>>> V4
export default ProfileStatus;