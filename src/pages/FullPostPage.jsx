import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useFetching from "../hooks/useFetching.js";
import PostService from "../API/PostService.js";
import Loader from "../components/Loader/Loader";
import {Comment} from "../components/Comment/Comment";

export const FullPostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchingPostById, isLoading, error] = useFetching(async () => {
        const res = await PostService.getById(id);
        setPost(res.data);
    });
    const [fetchingComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const res = await PostService.getCommentsByPostId(id);
        setComments(res.data);
    });
    useEffect(fetchingPostById, []);
    useEffect(fetchingComments, []);
    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div>
                    <h4 className="h">{post.title}</h4>
                    <div>{post.body}</div>
                </div>
            }
            <h4>Comments:</h4>
            {
                isCommentsLoading
                ? <Loader/>
                    : <div>
                        {
                            comments.map(c => <Comment
                                key={c.id}
                                name={c.name}
                                email={c.email}
                                body={c.body}
                            />)
                        }
                    </div>
            }
        </div>
    )
}