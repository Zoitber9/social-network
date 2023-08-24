import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import {InitialStateDialogsType} from "../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


type DialogsMessagesPropsType = {
    sendMessage: (newMessageBody: string) => void
    dialogsPage: InitialStateDialogsType
    isAuth: boolean
}

const Dialogs = (props: DialogsMessagesPropsType) => {
    let dialogsElement = props.dialogsPage.dialogs.map((i) => {

        return (
            <DialogItem key={i.id} name={i.name} id={i.id}/>
        )
    })
    let messagesElement = props.dialogsPage.messages.map((i) => {

        return (
            <Message key={i.id} id={i.id} message={i.message}/>
        )
    })

    // const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text: string = e.currentTarget.value
    //     props.updateNewMessageBody(text)
    // }
    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElement}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
export default Dialogs

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component='textarea'
                name='newMessageBody'
                placeholder={'Enter your message'}
            />
            <button>Add post</button>
        </form>

    )
}
const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)