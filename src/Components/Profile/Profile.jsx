import React from 'react';

import Class from './Profile.module.css';

import ProfileInfo from './PfofileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

const Profile = (props) => {
    return(
        <main className = {Class.content}>
            <ProfileInfo
                isOwner = { props.isOwner }
                profile = { props.profile }
                status = { props.status }
                updateStatus = { props.updateStatus }
                savePhoto = { props.savePhoto }
            />
            <div className = { `${Class.posts} + ${Class.padd}` }>
                <MyPostsContainer
                    store = { props.store }
                />
            </div>
        </main> 
    )
};

export default Profile;