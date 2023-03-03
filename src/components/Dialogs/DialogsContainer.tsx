import React from 'react';
import {
    // messagesPageType,
} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {StoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';

import StoreContext from '../../StoreContext';
type DialogsMessagesPropsType = {
    store: StoreType
}

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store: StoreType) => {
                let state = store.getState()

                const addMessage = () => {
                    store.dispatch(sendMessageAC())
                }
                let onMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageBodyAC(text))
                }
                return (
                    <Dialogs
                        updateNewMessageBody={onMessageChange}
                        sendMessage={addMessage}
                        state={state}
                    />
                )
            }
            }
        </StoreContext.Consumer>

    )
}
export default DialogsContainer