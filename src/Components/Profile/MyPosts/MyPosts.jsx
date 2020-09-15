import React from 'react';
import Class from './MyPosts.module.css';

import Post from './Post/Post';
import {reduxForm, Field} from "redux-form";


export const AddPostsForm = (props) => {
    return (
        <form name="newPostForm" onSubmit={ props.handleSubmit }>

            <Field

                component={'textarea'}

                className = { `${Class.new_post_textarea}` }

                name = "newPostText" id="" cols="10" rows="5"

                placeholder = "your new post"

            >&nbsp;</Field>

            <button

                className = { `${ Class.send_post }` } >

                send post

            </button>

        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(AddPostsForm);

const MyPosts = (props) => {

    let postElements = props.posts.map( d => <Post message = {d.message} likesCount = {d.likesCount} />);


    let addNewPost = (values) => {

        props.addPost(values.newPostText)
    };

    return (
        <div>

            <h2>My posts</h2> 

            <div className = { `${Class.new_post_container}` }>

                <AddPostFormRedux onSubmit = { addNewPost }/>

            </div>

            <div className = {`${Class.posts_container} + ${Class.padd}`}>

                {postElements}

            </div>

        </div>
     )
};



export default MyPosts;