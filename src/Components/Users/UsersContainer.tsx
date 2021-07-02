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
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {UserType} from "../../Types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage?: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize:number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
type OwnPropsType = {
    pageTitle: string

}

type PropsType = {
    pageTitle: string
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize:number) => void

    follow: () => void
    unFollow: () => void
}


class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount(){
        let {currentPage, pageSize} = this.props;
        this.props.getUsers( currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    };

    render() {
        return  <>
            <h2 style={{height: 0, fontSize: 0}}>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : null }

            <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                follow = {this.props.follow}
                unFollow = {this.props.unFollow}
                // isFetching = {this.props.isFetching}
                // toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow,
        unFollow,
        getUsers: requestUsers
    }),
    withAuthRedirect
)(UsersAPIComponent);