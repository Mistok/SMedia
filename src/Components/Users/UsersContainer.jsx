import React from 'react';
import Users from './UsersC';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unFollowAC, setCurrentPageAC, setUsersTotalCountAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {

    return {

        users: state.usersPage.users,

        pageSize: state.usersPage.pageSize,

        totalUsersCount: state.usersPage.totalUsersCount,

        currentPage: state.usersPage.currentPage

    }
};
let mapDispatchToProps = (dispatch) => {

  return {

      follow: (userId) => {

          dispatch(followAC(userId))

      },

      unFollow: (userId) => {

          dispatch(unFollowAC(userId))

      },

      setUsers: (users) => {

          dispatch(setUsersAC(users))

      },

      setCurrentPage: (pageNumber) => {

          dispatch( setCurrentPageAC(pageNumber) )

      },

      setUsersTotalCount: (totalCount) => {

          dispatch( setUsersTotalCountAC(totalCount) )

      }

  }

};

export default connect(mapStateToProps, mapDispatchToProps)(Users);