import React from 'react';
import {InitialStateUsersType, UserType} from '../../redux/users-reducer';
import s from './users.module.css'

type UsersPropsType = {
    usersPage: InitialStateUsersType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}


const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://media.istockphoto.com/id/1300845620/' +
                    'vector/user-icon-flat-isolated-on-white-background-user' +
                    '-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=' +
                    '-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504=',
                followed: false,
                fullName: 'Drus',
                status: 'I am a boss',
                location: {city: 'Brest', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://media.istockphoto.com/id/1300845620/' +
                    'vector/user-icon-flat-isolated-on-white-background-user' +
                    '-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=' +
                    'yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
                followed: true,
                fullName: 'Vasia',
                status: 'I am small boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoURL: 'https://media.istockphoto.com/id/1300845620/' +
                    'vector/user-icon-flat-isolated-on-white-background-user' +
                    '-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=' +
                    'yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
                followed: false,
                fullName: 'Den',
                status: 'I am not boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },

        ])
    }

    return (
        <div>
            {props.usersPage.users.map((i) => {
                const follow = () => {
                    props.follow(i.id)
                }
                const unFollow = () => {
                    props.unFollow(i.id)
                }

                return (<div key={i.id} className={s.user_container}>
                        <div className={s.user_img_btn}>
                            <div><img className={s.image} src={i.photoURL}
                                      alt="UserAvatar"/></div>
                            {i.followed
                                ? <button className={s.button}
                                          onClick={follow}>FOLLOW</button>
                                : <button className={s.button}
                                          onClick={unFollow}>UNFOLLOW</button>
                            }
                        </div>
                        <div className={s.info}>
                            <div className={s.info_name_status}>
                                <div>{i.fullName}</div>
                                <div>{i.status}</div>
                            </div>
                            <div className={s.location}>
                                <div>{i.location.country}</div>
                                <div>{i.location.city}</div>
                            </div>
                        </div>


                    </div>

                )
            })}


        </div>
    );
};

export default Users;