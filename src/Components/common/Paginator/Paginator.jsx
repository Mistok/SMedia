
import React from 'react';
import Class from './Paginator.module.css';


let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil( totalUsersCount / pageSize );

    let pages = [];

    for (let i = 1 ; i <= pagesCount ; i++  ){
        pages.push(i)
    }

    return <div className={Class.paginationContainer}>
            {pages.map( p => {
                return <span onClick={
                    (e) => {onPageChanged(p)}
                }
                     className={`${Class.paginationPage} ${currentPage === p && Class.selected}`}>{p}</span>

            })}
        </div>
};
export default Paginator;