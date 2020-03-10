import React from 'react';

import Class from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

const ProfileStatus = (props) =>{

    return (
        <>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input>{props.status}</input>
            </div>
        </>
    )

};
export default ProfileStatus;