import React from "react";
import s from "./Dialogs.module.css"
import DialogItem, { MessagePropsType} from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

type DialogItemPropsType = {
    id: number
    name: string
}

const Dialogs = () => {
    let dialogs: DialogItemPropsType[] = [
        {id: 1, name: 'Aleks'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasia'},
        {id: 4, name: 'Lili'},
        {id: 5, name: 'Sisi'},
        {id: 6, name: 'Рик'},
    ]
    let messagesData: MessagePropsType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hou are yuo?'},
        {id: 3, message: 'Im faind'},
    ]
    return (
        <div>
            messages
            <div className={s.dialogs + ' ' + s.active}>
                <div className={s.dialogsItem}>
                    <DialogItem id={1} name={'John'}/>
                    {dialogs.map((i) => {
                        return (
                            <DialogItem name={i.name} id={i.id}/>
                        )
                    })}

                </div>
                <div className={s.messages}>
                    {messagesData.map((i) => {
                        return (
                            <Message id={i.id} message={i.message}/>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default Dialogs