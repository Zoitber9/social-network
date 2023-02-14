import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import {
    ActionType,
    messagesPageType,
} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsMessagesPropsType = {
    dialogsMessages: messagesPageType
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsMessagesPropsType) => {
    let dialogsElement = props.dialogsMessages.dialogs.map((i) => {
        return (
            <DialogItem key={i.id} name={i.name} id={i.id}/>
        )
    })
    let messagesElement = props.dialogsMessages.messages.map((i) => {
        return (
            <Message key={i.id} id={i.id} message={i.message}/>
        )
    })

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(text))
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
                <div>
                    <div>
                        <textarea value={props.dialogsMessages.newMessageBody}
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