import {Route, Routes} from "react-router-dom";
import PostsPage from "./pages/PostsPage.jsx";
import {FullPostPage} from "./pages/FullPostPage.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import {HomePage} from "./pages/HomePage.jsx";

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/posts" element={<PostsPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/posts/:id" element={<FullPostPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}