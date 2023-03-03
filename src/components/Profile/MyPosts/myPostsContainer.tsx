import React from 'react';
import {
    addPostAC,
    InitialStateProfileType,
    updateNewPostTextAC
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReducerType} from "../../../redux/redux-store";


type MapStatePropsType = {
    profilePage: InitialStateProfileType
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: ReducerType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer