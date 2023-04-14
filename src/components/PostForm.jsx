import React, {useState} from 'react';
import AppInput from "./AppInput/AppInput.jsx";
import AppButton from "./AppButton/AppButton.jsx";

export default ({createPost}) => {
    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (event) => {
        event.preventDefault();
        if (post.title && post.body) {
            const newPost = {title: post.title, body: post.body, id: Date.now()};
            createPost(newPost);
            setPost({title: '', body: ''});
        }
    };
    return (
        <div>
            <form onSubmit={addNewPost}>
                <AppInput type="text" placeholder="Title..." value={post.title}
                          onChange={e => setPost({...post, title: e.target.value})}/>
                <AppInput type="text" placeholder="Text..." value={post.body}
                          onChange={e => setPost({...post, body: e.target.value})}/>
                <AppButton>Add Post</AppButton>
            </form>

        </div>
    );
};