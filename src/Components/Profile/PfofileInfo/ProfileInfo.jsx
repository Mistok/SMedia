import React from 'react';

import Class from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if ( !props.profile ){
        return <Preloader />
    }

    return(
        <div className='profileInfo'>
            <div className={Class.main_picture}/>
            <div className={`${Class.profile_info_container } + ${Class.padd}`}>
                <div className={Class.ava}>
                    <img className={Class.ava_img} src={props.profile.photos.large} />
                </div>
                <div className={`${Class.description} + ${Class.padd}`}>
                    <div className={Class.name_section}>
                        <p className={Class.fullName}>{props.profile.fullName}</p>
                        <div className={Class.status_container}>
                            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                        </div>
                    </div>
                    <div className={Class.links_section}>
                        <div className={Class.socials}>
                            <a className={Class.social_link} href={'www.' + props.profile.contacts.vk}>VK</a>
                            <a className={Class.social_link} href={props.profile.contacts.twitter}>Twitter</a>
                            <a className={Class.social_link} href={props.profile.contacts.instagram}>Instagram</a>
                            <a className={Class.social_link} href={props.profile.contacts.facebook}>FB</a>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
};

export default ProfileInfo;