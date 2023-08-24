import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {InitialStateProfileType} from '../../../redux/profile-reducer';
 
export type PostsPropsType = {
    profilePage: InitialStateProfileType
    updateNewPostText?: (text: string) => void
    addPost: (newPostText: string) => void

}

const MyPosts: React.FC<PostsPropsType> = (props:PostsPropsType) => {

    let postsElements = props.profilePage.posts.map((i) => {
            return (
                <Post key={i.id} id={i.id}  message={i.message} like={i.likesCount}/>
            )
        }
    )
    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return  (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts

type FormDataType = {
    newMessageBody: string
}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    name='newPostText'
                />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddNewPostForm)