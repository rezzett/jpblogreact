import AppInput from "../components/AppInput/AppInput";
import AppButton from "../components/AppButton/AppButton";
import {useContext} from "react";
import {AuthContext} from "../context.js";
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        window.localStorage.setItem('auth', 'true');
        navigate('/posts');
    }
    return (
        <div>
            <h2 className="h">Login page</h2>
            <form onSubmit={login}>
                <AppInput type="text" placeholder="login"/>
                <AppInput type="text" placeholder="password"/>
                <AppButton>Login</AppButton>
            </form>
        </div>
    )
}