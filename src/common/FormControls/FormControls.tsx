import React from 'react';
import s from './FormControls.module.css'
import {Field} from "redux-form";

const FormControl = (props: any) => {
    let {meta, children} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea = (props: any) => {
    let {input} = props
    return (
        <FormControl {...props}>
            <textarea {...input}{...props}/>
        </FormControl>

    );
};

export const Input = (props: any) => {
    let {input} = props
    return (
        <>
            <FormControl {...props}>
                <input {...input}{...props}/>
            </FormControl>
        </>
    );
};

export const createField = (component: (props: any) => JSX.Element,
                            validate: [(value: string) => undefined | string],
                            name: string, placeholder: string,
                            props = {}, text = '') => {
    return (
        <div>
            <Field component={component}
                   validate={validate}
                   name={name}
                   placeholder={placeholder}
                   value={''}
                   {...props}
            /> {text}
        </div>
    )
}