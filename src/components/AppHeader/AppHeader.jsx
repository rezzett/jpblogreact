import css from "./AppHeader.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../assets/interior_0.jpg"
import AppButton from "../AppButton/AppButton";
import {useContext} from "react";
import {AuthContext} from "../../context.js";

export const AppHeader = () => {
    const navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        window.localStorage.removeItem('auth');
        navigate('/');
    }

    return (
        <header className={css.header}>
            <div onClick={() => navigate("/")}>
                <img className={css.logo_img} src={logo} alt="logo"/>
            </div>
            <div className={css.menu}>
                {isAuth
                    ? <AppButton onClick={logout}>Logout</AppButton>
                    : <AppButton onClick={() => navigate('/login')}>Login</AppButton>
                }

                <ul>
                    {
                        isAuth &&
                        <li className={css.menu__item}>
                            <NavLink to="/posts" className={css.menu__link}>posts</NavLink>
                        </li>
                    }
                    <li className={css.menu__item}>
                        <NavLink to="/about" className={css.menu__link}>about</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}