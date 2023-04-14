import React from 'react';
import css from './PostItem.module.css'
import {useNavigate} from "react-router-dom";

export default ({post, remove}) => {
    const navigate = useNavigate();
    return (
        <div className={css.postItem}>
            <div>
                <h4 className={css.post__title}>{post.title}</h4>
                <p>{post.body}</p>
                <button
                    className={css.open__btn}
                    onClick={() => navigate({pathname: `/posts/${post.id}`})}>Open...
                </button>
            </div>
            <div>
                <button onClick={() => remove(post)} className={css.post__btn}>
                    <i className="fa fa-remove"></i>
                </button>
            </div>
        </div>
    );
};
