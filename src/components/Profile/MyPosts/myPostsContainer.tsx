import {addPostAC, InitialStateProfileType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {ReducerType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    profilePage: InitialStateProfileType
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: ReducerType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer