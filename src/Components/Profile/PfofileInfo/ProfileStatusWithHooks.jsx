
import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('');

    useEffect(() => {

        setStatus(props.status)
    }, [props.status]);
    // state={
    //     editMode: false,
    //     status: this.props.status
    // };
    // activateEditMode = () => {
    //
    //     this.setState({
    //         editMode: true,
    //     })
    //
    // };
    // deActivateEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     });
    //     this.props.updateStatus(this.state.status)
    //
    // };
    // onStatusChange = (e) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // };
    //
    // componentDidUpdate = (prevProps, prevState)  => {
    //
    //     if (prevProps.status !== this.props.status){
    //         this.setState({status: this.props.status});
    //     }
    //
    //     let a = this.props;
    //     let b = this.state;
    // };
    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value)
    };
    const activateEditMode = () => {
        setEditMode(true);
    };
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    return(
        <>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}
                    >
                        {props.status || 'no status'}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange }
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        value={status}
                        placeholder={status}
                    />
                </div>
            }

        </>
    )

};

export default ProfileStatusWithHooks;