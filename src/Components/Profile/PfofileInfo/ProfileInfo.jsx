import React from 'react';

import Class from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
        <div className='profileInfo'>

            <div className={Class.main_picture}></div>

            <div className={`${Class.main } + ${Class.padd}`}>

                <div className={Class.ava}>ava</div>

                <div className={`${Class.description} + ${Class.padd}`}>Description</div> 
                
            </div>
        </div>
    )
};

export default ProfileInfo;