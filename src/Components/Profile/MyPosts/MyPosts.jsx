import React from 'react';
import Class from './MyPosts.module.css';

import Post from './Post/Post';



const MyPosts = (props) => {

    let postElements = props.posts.map( d => <Post message = {d.message} likesCount = {d.likesCount} />);
    
    let newPostElement = React.createRef();
    
    let onAddPost = () => {

        props.addPost();

     };

    let onPostChanges = () => {

        let text = newPostElement.current.value;

        props.updateNewPostText(text);

    };

    return (
        <div>

            <h2>My posts</h2> 

            <div className = { `${Class.new_post_container}` }>

                <form action = "#" name="newPostForm">

                    <textarea 
                
                        ref = { newPostElement } 

                        onChange = { onPostChanges } 

                        className = { `${Class.new_post_textarea}` } 

                        name = "newPost" id="" cols="10" rows="5" 

                        placeholder = "your new post" 

                        value = { props.newPostText }

                    >&nbsp;</textarea>
                   
                    <div 
                        onClick = { onAddPost }
                        
                        className = { `${ Class.send_post }` } > send post

                    </div>
               
                </form>

            </div>

            <div className = {`${Class.posts_container} + ${Class.padd}`}>

                {postElements}

            </div>

        </div>
     )
};

export default MyPosts;