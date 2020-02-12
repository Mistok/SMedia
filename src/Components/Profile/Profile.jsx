import React from 'react';

import Class from './Profile.module.css';

import ProfileInfo from './PfofileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';



const Profile = (props) => {

    return(
           
        <main className = {Class.content}>

            <ProfileInfo/> 

            <div className = { `${Class.posts} + ${Class.padd}` }>     

                <MyPostsContainer

                    store = { props.store }
                    
                />
                
            </div>

        </main> 
    )
};

export default Profile;