import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import {InitialStateDialogsType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

type DialogsMessagesPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
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

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        props.updateNewMessageBody(text)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElement}
                </div>
                <div>
                    <div>
                        <textarea value={props.dialogsPage.newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={'Enter your message'}>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}> Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs