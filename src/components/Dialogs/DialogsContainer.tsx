import React from 'react';
import {InitialStateDialogsType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {ReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../../src/components/hoc/WithAuthRedirect";


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

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)