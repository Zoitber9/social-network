import React from 'react';
import {
    // messagesPageType,
} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {StoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsMessagesPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsMessagesPropsType) => {
    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageBodyAC(text))
    }
    return (
        <Dialogs
            updateNewMessageBody={onMessageChange}
            sendMessage={addMessage}
            state={state}
        />
    )
}
export default DialogsContainer