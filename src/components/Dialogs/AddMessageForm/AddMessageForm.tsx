import {maxLengthCreator, required} from '../../../utils/validator';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../../common/FormControls/FormControls';

type FormDataType = {
    newMessageBody: string
}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='newMessageBody'
                validate={[required, maxLength50]}
                placeholder={'Enter your message'}
            />
            <button>Add post</button>
        </form>

    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)