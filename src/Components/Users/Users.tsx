
import React, {FC} from 'react';
import Class from  './users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../Types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    users: Array<UserType>

    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

let Users: FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {

    let pagesCount = Math.ceil( totalUsersCount / pageSize );

    let pages = [];

    for (let i = 1 ; i <= pagesCount ; i++  ){
        pages.push(i)
    }

    return <div className={Class.users_wrapper}>
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            pageSize={pageSize}
            totalItemsCount={totalUsersCount}
        />

        <div className={Class.users_container}>
            {
                props.users.map( u => <User
                                        user={u}
                                        followingInProgress={props.followingInProgress}
                                        follow={props.follow}
                                        unFollow={props.unFollow}
                                        key={u.id}/>
                )}
        </div>
    </div>
};
export default Users;