import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const Login = () => {

    const onSubmit = (formData: FormDataType)=> {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'login'} placeholder={'login'}/>
            <Field component={'input'} name={'password'} placeholder={'password'}/>
            <Field component={'input'} name={'rememberMe'} type="checkbox" /> remember Me
            <button>Login</button>

        </form>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)