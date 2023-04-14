import {AppHeader} from "./components/AppHeader/AppHeader";
import {PrivateRoutes} from "./PrivateRoutes";
import {PublicRoutes} from "./PublicRoutes";
import {AuthContext} from "./context.js";
import {useEffect, useState} from "react";
import Loader from "./components/Loader/Loader";

export default () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(window.localStorage.getItem('auth'))  setIsAuth(true);
        setIsLoading(false);
    }, []);

    // wait auth
    if(isLoading) return <Loader/>
    return (
        <>
            <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>

                <AppHeader/>
                <div className="wr">
                    {
                        isAuth
                            ? <PrivateRoutes/>
                            : <PublicRoutes/>
                    }

                </div>
            </AuthContext.Provider>
        </>
    )
}
