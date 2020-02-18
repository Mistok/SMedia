import React from 'react';
import Class from  './users.module.css';
import *as axios from "axios";

class Users extends React.Component {
    constructor (props) {
        super(props);

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
                }
            );
    };

    render() {

        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

        let pages = [];

        for (let i = 1 ; i <= pagesCount ; i++  ){
            pages.push(i)
        }
        return <div>
            <div className={Class.paginationContainer}>
                {pages.map( p => {
                    return <span onClick={
                        (e) => { this.onPageChanged(p)}
                    }
                    className={`${Class.paginationPage} ${this.props.currentPage === p && Class.selected}`}>{p}</span>
                })}

            </div>
            {
                this.props.users.map( u => <div key={u.id}>



                    <div><img className = {Class.users_photo} src = {u.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg'} alt = ""/></div>

                    <div>

                        { u.followed
                            ? <button onClick = { () => { this.props.unFollow(u.id)} } >Unfollow</button>
                            : <button onClick = { () => { this.props.follow(u.id)} } >Follow</button>
                        }

                    </div>
                    <div>
                        <div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>

                    </div>
                </div>)}

        </div>
    }
}

export default Users;