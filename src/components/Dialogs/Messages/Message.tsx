import React from "react";
import s from "../Dialogs.module.css"



export type MessagePropsType = {
    id: number
    message: string
}

const Message = (props:MessagePropsType)=> {
    return (
        <div  key={props.id}>{props.message}</div>
    )
}


export  default Message