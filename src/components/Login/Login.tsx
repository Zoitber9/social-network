import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../utils/validator";
import {useSelector} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {Redirect} from "react-router-dom";
import {ReducerType,StoreType, useAppDispatch} from "../../redux/redux-store";
import s from './login.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}


const Login = () => {
    let isAuth = useSelector<ReducerType, boolean>(state => state.auth.isAuth)
    // const [isAuthLog, setisAuthLog] = useState(isAuth)
    console.log(isAuth)
    const dispatch = useAppDispatch()
    const onSubmit = (formData: FormDataType) => {
        let {email, password, rememberMe} = formData
        dispatch(login(email, password, rememberMe))
    }
    if(isAuth)return <Redirect to={"/profile"}/>

// useEffect(()=> {
//     setisAuthLog(isAuth)
// }, [isAuth])
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
        <form onSubmit={props.handleSubmit}>
            <Field component={Input}
                   validate={[required]}
                   name="email" placeholder={'email'}/>
            <Field component={Input}
                   validate={[required]}
                   name="password" placeholder={'password'}
                   type="password"/>
            <Field component={Input}
                   name="rememberMe" type="checkbox"/> remember Me
            {props.error && <div className={s.formSummeryError}>
                {props.error}
            </div>}
            <button> Login</button>
        </form>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)