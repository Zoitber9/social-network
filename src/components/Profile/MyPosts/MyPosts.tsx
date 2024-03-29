import React, {memo} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {InitialStateProfileType} from '../../../redux/profile-reducer';
import {maxLengthCreator, required} from "../../../utils/validator";
import {Textarea} from "../../../common/FormControls/FormControls";



const MyPosts: React.FC<PostsPropsType> = memo((props: PostsPropsType) => {
    let postsElements = props.profilePage.posts.map((i) => {
            return (
                <Post key={i.id} id={i.id} message={i.message} like={i.likesCount}/>
            )
        }
    )
    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})
export default MyPosts

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = memo((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newPostText'
                    validate={[required, maxLength10]}
                    placeholder={'Post message'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
})

// Types

type FormDataType = {
    newMessageBody: string
}

export type PostsPropsType = {
    profilePage: InitialStateProfileType
    updateNewPostText?: (text: string) => void
    addPost: (newPostText: string) => void
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddNewPostForm)