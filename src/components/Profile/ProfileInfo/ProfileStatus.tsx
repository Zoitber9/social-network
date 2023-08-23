import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatus: React.FC<ProfileStatusPropsType> = ({status, updateStatus}) => {
    console.log('ProfileStatus')
    const [editMode, setEditMode] = useState(false)
    const [valueInput, setValueInput] = useState('')

    useEffect(() => {
        setValueInput(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(!editMode)
    }
    const deactivateEditMode = () => {
        updateStatus(valueInput)
        setEditMode(!editMode)

    }
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