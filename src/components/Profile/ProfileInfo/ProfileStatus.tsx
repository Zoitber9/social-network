import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatus: React.FC<ProfileStatusPropsType> = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false)
    const [valueInput, setValueInput] = useState('')

    useEffect(() => {
        setValueInput(status)
    }, [status])

    const activateEditMode = useCallback (() => {
        setEditMode(!editMode)
    },[editMode])
    const deactivateEditMode =useCallback(() => {
        updateStatus(valueInput)
        setEditMode(!editMode)
    },[editMode,valueInput])
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)

    }


    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{valueInput || 'Установить статус'}</span>
                </div>
                :
                <div>
                    <input type="text" value={valueInput} onChange={onStatusChange} onBlur={deactivateEditMode}
                           autoFocus={true}/>
                </div>
            }

        </div>

    );
};

export default ProfileStatus;