import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from "../../common/FormControls/FormControls";
import {required} from "../../utils/validator";
import {useSelector} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {Redirect} from "react-router-dom";
import {ReducerType, useAppDispatch} from "../../redux/redux-store";
import s from './login.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
    captcha: string
}


const Login = () => {
    let isAuth = useSelector<ReducerType, boolean>(state => state.auth.isAuth)
    const dispatch = useAppDispatch()
    const onSubmit = (formData: FormDataType) => {
        let {email, password, rememberMe, captcha} = formData
        dispatch(login(email, password, rememberMe, captcha))
    }
    if (isAuth) return <Redirect to={"/profile"}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error }) => {
    const captchaUrl = useSelector<ReducerType, string | null>(state => state.auth.captchaUrl)
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, [required], 'email', 'email')}
            {createField(Input, [required], 'password', 'password', {type: 'password'},)}
            {createField(Input, [required], 'rememberMe', '', {type: 'checkbox'}, 'remember Me')}

            {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
            {captchaUrl && createField(Input, [required], 'captcha', 'captcha', {type: 'text'}) }
            {error && <div className={s.formSummeryError}>
                {error}
            </div>}
            <button> Login</button>
        </form>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)