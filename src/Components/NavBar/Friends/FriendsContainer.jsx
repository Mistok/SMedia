
import React from 'react';
import Friends  from './Friends';
import connect from "react-redux/es/connect/connect";

let getFriendsData = (state) => {
    return{

        friendsData: state.friends.friendsData

    }
};
let FriendsContainer = connect( getFriendsData )(Friends);

export default FriendsContainer;