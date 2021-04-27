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
    requestUsers
} from '../../redux/users-reducer';
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

// let mapStateToProps = (state) => {
//
//     return {
//
//         users: state.usersPage.users,
//
//         pageSize: state.usersPage.pageSize,
//
//         totalUsersCount: state.usersPage.totalUsersCount,
//
//         currentPage: state.usersPage.currentPage,
//
//         isFetching: state.usersPage.isFetching,
//
//         followingInProgress: state.usersPage.followingInProgress
//
//     }
// };

let mapStateToProps = (state) => {

    return {

        users: getUsers(state),

        pageSize: getPageSize(state),

        totalUsersCount: getTotalUsersCount(state),

        currentPage: getCurrentPage(state),

        isFetching: getIsFetching(state),

        followingInProgress: getFollowingInProgress(state)

    }
};


// let withAuthUsersComponent = withAuthRedirect(UsersAPIComponent);

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers: requestUsers
    }),
    withAuthRedirect
)(UsersAPIComponent);

