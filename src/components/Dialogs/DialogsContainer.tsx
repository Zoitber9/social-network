import React from 'react';
import {InitialStateDialogsType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReducerType} from "../../redux/redux-store";

type mapStateToPropsType = {
    dialogsPage: InitialStateDialogsType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        dialogsPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer