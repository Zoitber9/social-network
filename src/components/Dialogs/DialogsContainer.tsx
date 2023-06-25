import React from 'react';
import {InitialStateDialogsType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../../src/components/hoc/WithAuthRedirect";
import {Redirect} from 'react-router-dom';


type mapStateToPropsType = {
    dialogsPage: InitialStateDialogsType
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        dialogsPage: state.messagesPage
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer