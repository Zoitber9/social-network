import React from 'react';
import {InitialStateDialogsType} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {ReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {addPostAC} from "../../redux/profile-reducer";

const mapStateToProps = (state: ReducerType): mapStateToPropsType => {
    return {
        dialogsPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(addPostAC(newMessageBody))
        }
    }
}

// Types
type mapStateToPropsType = {
    dialogsPage: InitialStateDialogsType
}

type mapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)