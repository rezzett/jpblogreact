import PostItem from "./components/PostItem/PostItem.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export default ({posts, remove}) => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>List of posts:</h2>
            <TransitionGroup>
                {posts.map(post =>
                    <CSSTransition
                        key={post.id}
                        classNames="item"
                        timeout={500}
                    >
                        <PostItem post={post} remove={remove}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};