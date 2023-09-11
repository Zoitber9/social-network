import React, {FC} from 'react';
import {InitialStateProfileType, ProfileType} from '../../../redux/profile-reducer';
import {required} from '../../../utils/validator';
import {createField, Input, Textarea} from './../../../common/FormControls/FormControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import s from './ProfileDataForm.module.css'

export type ProfileFormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType>> = ({handleSubmit}) => {
    const profile = useSelector<AppRootStateType, ProfileType | null>(state => state.profilePage.profile)
    return (
        <form onSubmit={handleSubmit}>
            <button>save</button>
            <div>
                <b>Full name</b>: {createField(Input, [required], 'fullName', 'Full name', {type: 'text'},)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField(Input, [required], 'lookingForAJob', '', {type: 'checkbox'},)}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField(Textarea, [required], 'lookingForAJobDescription', 'My professional skills',)}
            </div>
            <div>
                <b>About me</b>:
                {createField(Textarea, [required], 'aboutMe', 'About me',)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile!.contacts).map((key, ind) => {
                console.log(key)
                return (
                    <div className={s.contact}>
                        <b>{key}: {createField(Input, [required], 'contacts.' + key, 'Full name', {type: 'text'})}</b>
                    </div>
                )
            })}
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileFormDataType>({form: 'editProfile'})(ProfileDataForm)