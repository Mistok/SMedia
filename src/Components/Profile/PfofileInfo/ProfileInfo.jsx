import React, {useState} from 'react';

import Class from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assets/user.jpg";
import ProfileDataForm from "./ProfileDataForm";
const ProfileInfo = (props) => {

    const [editMode, activateEditMode] = useState(false);

    if ( !props.profile ){
        return <Preloader />
    }

    const  onMainPhotoSelected = (e) => {
        e.target.files.length && props.savePhoto(e.target.files[0]);
    }

    const ContactCreator = ({contactTitle, contactValue}) => {
        return (
            <div><a className={Class.social_link} href={'www' }>{contactTitle}</a>{contactValue}</div>
        )
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        activateEditMode(false);
    }

    const ProfileData = ({profile, isOwner, activateEditMod}) => {
        return(
            <div className={`${Class.description} `}>
                {isOwner && <div className={Class.profile_info_section}> <button onClick={activateEditMod}>Edit</button> </div>}
                <div className={Class.profile_info_section}>
                    <strong>Full Name:</strong>
                    <p className={Class.fullName}>{profile.fullName}</p>
                </div>
                <div className={Class.profile_info_section}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={Class.links_section}>
                    <div className={Class.socials}>
                        {Object.keys(profile.contacts).map((contact) => {
                            return  <ContactCreator  contactTitle={contact} contactValue={profile.contacts[contact]}/>
                        })}
                    </div>
                    <div className={Class.profile_info_section}>
                        <strong> Looking for a job:  </strong>
                        {profile.lookingForAJob ? "yes" : " no"}
                    </div>
                    <div className={Class.profile_info_section}>
                        <div><strong>My professional skills:</strong></div>
                        <div>{profile.lookingForAJobDescription}</div>
                    </div>
                    <div className={Class.profile_info_section}>
                        <strong>About me:  </strong>
                        <div>{profile.aboutMe}</div>
                    </div>
                </div>
            </div>
        )
    };
    return(
        <div className='profileInfo'>
            <div className={Class.main_picture}/>
            <div className={`${Class.profile_info_container } + ${Class.padd}`}>
                <div className={Class.ava}>
                    <img className={Class.ava_img} src={props.profile.photos.large || usersPhoto}  alt={'avatar'}/>
                    { props.isOwner &&  <input type={"file"} onChange={onMainPhotoSelected}/> }
                </div>
                {editMode
                    ? <ProfileDataForm
                        initialValues={props.profile}
                        onSubmit={onSubmit}
                        isOwner={props.isOwner}/>
                    : <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        activateEditMod={() => activateEditMode(true)}/>}
            </div>
        </div>
    )
};

export default ProfileInfo;