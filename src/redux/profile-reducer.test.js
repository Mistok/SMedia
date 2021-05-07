
// profile test

import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello!', likesCount: 21},
        {id: 3, message: 'What`s up?', likesCount: 5},
        {id: 4, message: 'Howdy!', likesCount: 11}
    ],
    profile: null,
    status: ""
};

test('new post should be added', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hello!', likesCount: 21},
            {id: 3, message: 'What`s up?', likesCount: 5},
            {id: 4, message: 'Howdy!', likesCount: 11}
        ],
        profile: null,
        status: ""
    };
    let newState = profileReducer(initialState,action);

    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hello!', likesCount: 21},
            {id: 3, message: 'What`s up?', likesCount: 5},
            {id: 4, message: 'Howdy!', likesCount: 11}
        ],
        profile: null,
        status: ""
    };
    let newState = profileReducer(initialState,action);

    expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

test('after deleting length of messages should be increment', () => {
    let action = deletePost(1);
    let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hello!', likesCount: 21},
            {id: 3, message: 'What`s up?', likesCount: 5},
            {id: 4, message: 'Howdy!', likesCount: 11}
        ],
        profile: null,
        status: ""
    };

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(3);
});


test('after deleting length of messages shouldn`t be decremented if ID is invalid', () => {
    let action = deletePost(1000);
    let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hello!', likesCount: 21},
            {id: 3, message: 'What`s up?', likesCount: 5},
            {id: 4, message: 'Howdy!', likesCount: 11}
        ],
        profile: null,
        status: ""
    };

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(4);
});

profileReducer({}, {})
