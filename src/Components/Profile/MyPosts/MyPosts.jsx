import React from 'react';
import Class from './MyPosts.module.css';

import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Utils/Validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

let maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postElements = props.posts.map( d => <Post message = {d.message} likesCount = {d.likesCount} />);

    let onAddPost = (values) => {
        //console.log(values.newPostText);
        props.addPost(values.newPostText);
    };
    return (
        <div>

            <h2>My posts</h2> 

            <div className = { `${Class.new_post_container}` }>

                <AddNewPostFormRedux onSubmit={onAddPost}/>

            </div>

            <div className = {`${Class.posts_container} + ${Class.padd}`}>

                {postElements}

            </div>

        </div>
     )
};

let NewPostForm =  (props) => {
    return( <form
        onSubmit={props.handleSubmit}
        name="newPostForm">

        <Field

            component={Textarea}

            validate={[requiredField, maxLength10]}

            className = { `${Class.new_post_textarea}` }

            name = "newPostText" id="" cols="10" rows="5"

            placeholder = {"your new post2"}

            value = { props.newPostText }

        >&nbsp;</Field>

        <button
            className = { `${ Class.send_post }` }

        > Send post </button>
    </form>)
};

let AddNewPostFormRedux = reduxForm({
    form: 'addNewPostFormRedux'
})(NewPostForm);

export default MyPosts;