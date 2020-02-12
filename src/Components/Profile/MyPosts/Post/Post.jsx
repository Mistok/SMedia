import React from 'react';
import Class from './Post.module.css';



const Post = (messages) => {
    
    return (

        <div className = {`${Class.posts_container} + ${Class.padd}`}>

            <div className = {`${Class.post}  ${Class.post1}`}>

                <img src = "https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-1/p160x160/52602124_768984083475933_1866115607385079808_o.jpg?_nc_cat=105&_nc_ohc=hutdlOMzOPsAX9eFsM9&_nc_ht=scontent.fiev13-1.fna&_nc_tp=6&oh=7eeb97481c7550e52ac1bdfa7bf72701&oe=5ED72043"  alt="users_avatar"/>
                
                <div className = {`${Class.post_text}`}>
                    
                    <h2 className = {`${Class.message_title}` }> My post #1 </h2>    
                    
                    <div className = {`${Class.post_message}`}>
                      
                       {messages.message}

                    </div>
                   
                    <div className = {`${Class.like_panel}`}>

                        <div className = {`${Class.like_buttons}`}>

                            <button className = 'like' ><i className = "fas fa-thumbs-up" ></i> Like</button>

                            <button className = 'Dislike' ><i className = "fas fa-thumbs-down" ></i> Dislike</button>

                        </div>

                        <div className={`${Class.likes_count}`}>

                            <em>Likes: </em>

                            <em>{messages.likesCount}</em>

                        </div>

                    </div>                    
                </div>
            </div>
        </div>
     )
}

export default Post;