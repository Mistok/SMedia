import React from 'react';
import Class from  './users.module.css';


let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

    let pages = [];

    for (let i = 1 ; i <= pagesCount ; i++  ){
        pages.push(i)
    }

    return <div>
        <div className={Class.paginationContainer}>
            {pages.map( p => {
                return <span onClick={
                    (e) => { props.onPageChanged(p)}
                }
                className={`${Class.paginationPage} ${props.currentPage === p && Class.selected}`}>{p}</span>
            })}

        </div>
        {
            props.users.map( u => <div key={u.id}>



                <div><img className = {Class.users_photo} src = {u.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg'} alt = ""/></div>

                <div>

                    { u.followed
                        ? <button onClick = { () => { props.unFollow(u.id)} } >Unfollow</button>
                        : <button onClick = { () => { props.follow(u.id)} } >Follow</button>
                    }

                </div>
                <div>
                    <div>
                        <div>
                            {u.name}
                        </div>
                        <div className={Class.users_status}>
                            {u.status}
                        </div>
                    </div>

                </div>
            </div>)}

    </div>
};

export default Users;