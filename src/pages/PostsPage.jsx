import {useEffect, useState} from "react";
import useFetching from "../hooks/useFetching.js";
import PostService from "../API/PostService.js";
import {getPageCount} from "../utils/pages.js";
import {usePosts} from "../hooks/usePosts.js";
import AppModal from "../components/AppModal/AppModal.jsx";
import PostForm from "../components/PostForm.jsx";
import PostFilter from "../components/PostFilter.jsx";
import AppButton from "../components/AppButton/AppButton.jsx";
import Loader from "../components/Loader/Loader.jsx";
import PostList from "../PostList.jsx";
import {Pagination} from "../components/Pagination/Pagination.jsx";

export default () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const res = await PostService.getAll(limit, page);
        setPosts(res.data);
        setTotalPages(getPageCount(res.headers['x-total-count'], limit));
    });
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

    useEffect(fetchPosts, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }
    const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id));

    return (
        <div>
            <AppModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </AppModal>
            <div className="widgets">
                <PostFilter filter={filter} setFilter={setFilter}/>
            </div>
            <hr className="line"/>
            <AppButton onClick={() => setModal(true)}>Create Post</AppButton>
            {postError && <h4>An error has occurred: {postError}</h4>}
            {
                isPostLoading
                    ? <Loader/>
                    : <PostList posts={sortedAndSearchedPost} remove={removePost}/>
            }
            <Pagination setPage={setPage} totalPages={totalPages} page={page}/>
        </div>
    )
}
