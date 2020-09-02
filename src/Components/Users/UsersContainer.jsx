import React from 'react';

import {connect} from 'react-redux';
import {
    follow,
    setUsers,
    unFollow,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersAPIComponent extends React.Component {

    componentDidMount(){

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

     }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

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
                toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
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

        isFetching: state.usersPage.isFetching,

        followingInProgress: state.usersPage.followingInProgress

    }
};


let withAuthUsersComponent = withAuthRedirect(UsersAPIComponent);

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers
})(withAuthUsersComponent);