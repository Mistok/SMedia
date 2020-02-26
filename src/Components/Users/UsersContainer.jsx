import React from 'react';

import {connect} from 'react-redux';
import {
    follow,
    setUsers,
    unFollow,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
} from '../../redux/users-reducer';
import Users from './Users';
import *as axios from 'axios';
import Preloader from '../common/preloader/preloader';
import {usersAPI} from '../../API/api';

class UsersAPIComponent extends React.Component {

    componentDidMount(){
         this.props.toggleIsFetching(true);

         usersAPI.getUser(this.props.currentPage, this.props.pageSize).then((data) => {
                 this.props.toggleIsFetching(false);
                 this.props.setUsers(data.items);
                 this.props.setUsersTotalCount(data.totalCount)
             }
         );


     }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUser(this.props.currentPage, this.props.pageSize).then((data) => {
             this.props.toggleIsFetching(false);
             this.props.setUsers(data.items);
             this.props.setUsersTotalCount(data.totalCount)
             }
         );
    };

    render() {

        return  <>

            {this.props.isFetching ? <Preloader/> : null }

            <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                follow = {this.props.follow}
                unFollow = {this.props.unFollow}
                isFetching = {this.props.isFetching}
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {

        users: state.usersPage.users,

        pageSize: state.usersPage.pageSize,

        totalUsersCount: state.usersPage.totalUsersCount,

        currentPage: state.usersPage.currentPage,

        isFetching: state.usersPage.isFetching

    }
};


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersAPIComponent);