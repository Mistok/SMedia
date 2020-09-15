import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer.js';
import connect from "react-redux/es/connect/connect";

let mapStateToProps = (state) => {

    return {

        posts: state.profilePage.posts,

        newPostText: state.profilePage.newPostText

    }
};


let mapDispatchToProps = (dispatch) => {

  return {

      addPost: (newPostText) => {
          dispatch( addPostActionCreator(newPostText) );
      }
  }
};
const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )( MyPosts );
export default MyPostsContainer;