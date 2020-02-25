import React from 'react';
import Header from "./Header";
import * as axios from 'axios'
class HeaderContainer extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then((response) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount)
                }
            );
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default HeaderContainer;