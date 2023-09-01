import React from 'react';
import s from './FormControls.module.css'

const FormControl= (props: any) => {
    let {input, meta, children, ...rest} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div >
                {children}
            </div>
            { hasError && <span>{meta.error}</span> }

        </div>
    );
}



export const Textarea = (props: any) => {
    let {input, meta, child, ...rest} = props
    return (
        <FormControl {...props}>
            <textarea {...input}{...props}/>
        </FormControl>

    );
};


export const Input = (props: any) => {
    let {input, meta, child, ...rest} = props
    return (
        <>
            <FormControl {...props}>
                <input {...input}{...props}/>
            </FormControl>
        </>

    );
};