import React from 'react';
import Class from  './users.module.css';
import *as axios from "axios";

let Users = (props) => {

    let getUsers = () => {
        if( props.users.length === 0 ){

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(
                    (response) => {props.setUsers(response.data.items)});

            // props.setUsers(
            //     [
            //         {
            //             id: 1,
            //             photoUrl: 'https://uznayvse.ru/images/celebs/nagiev_medium.jpg',
            //             followed: true,
            //             fullName: 'Dmitry',
            //             status: 'sad',
            //             location: {city: 'Minsk', country: 'Belarus'}
            //         },
            //         {
            //             id: 2,
            //             photoUrl: 'https://politeka.net/crops/ae41f5/620x0/1/0/2018/08/16/nsnlBfg7cyvc5BqE66j3nI7Rj0YBS8Or.jpg',
            //             followed: false,
            //             fullName: 'Vasya',
            //             status: 'rolf',
            //             location: {city: 'Tartu', country: 'Estonia'}
            //         },
            //         {
            //             id: 3,
            //             photoUrl: 'https://politeka.net/crops/ae41f5/620x0/1/0/2018/08/16/nsnlBfg7cyvc5BqE66j3nI7Rj0YBS8Or.jpg',
            //             followed: true,
            //             fullName: 'Olga',
            //             status: 'gorgeous',
            //             location: {city: 'Kiyv', country: 'Ukraine'}
            //         },
            //         {
            //             id: 4,
            //             photoUrl: 'https://soundtracktracklist.com/wp-content/uploads/2017/04/Tim-Minchin.jpg',
            //             followed: false,
            //             fullName: 'Tim',
            //             status: 'like a boss',
            //             location: {city: 'Gomel', country: 'Belarus'}
            //         },
            //         {
            //             id: 5,
            //             photoUrl: 'https://ticketleap-media-master.s3.amazonaws.com/29c53cec-7b52-47bb-a9f1-504a00bf4c54/hero.jpg',
            //             followed: false,
            //             fullName: 'Eugene',
            //             status: 'zzz',
            //             location: {city: 'Minsk', country: 'Belarus'}
            //         },
            //         {
            //             id: 6,
            //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHCMd8GiDXCyFlAfrm1ElW9Mz5DrOLTopVi61xLJicOa8Pr07E',
            //             followed: true,
            //             fullName: 'Sasha',
            //             status: 'sad',
            //             location: {city: 'Kiyv', country: 'Ukraine'}
            //         },
            //     ]
            // );
        }
    };


     return <div>
          <button onClick={getUsers}>
              Get Users
          </button>
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
                         {u.fullName}
                    </div>
                    <div>
                        {u.status}
                    </div>
                 </div>

             </div>
         </div>)}

     </div>
};

export default Users;