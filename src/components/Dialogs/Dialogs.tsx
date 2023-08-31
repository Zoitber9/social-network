import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import {InitialStateDialogsType} from '../../redux/dialogs-reducer';
import {AddMessageFormRedux} from '../../components/Dialogs/AddMessageForm/AddMessageForm';

type DialogsMessagesPropsType = {
    sendMessage: (newMessageBody: string) => void
    dialogsPage: InitialStateDialogsType

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

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
export default Dialogs