import {Navigate, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {ErrorPage} from "./pages/ErrorPage";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="*" element={<Navigate to="/error"/>}/>
        </Routes>
    )
}