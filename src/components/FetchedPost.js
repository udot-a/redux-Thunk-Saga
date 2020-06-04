import React from "react";
import PostItem from "./PostItem";
import {connect, useDispatch, useSelector} from "react-redux";
import {fetchPostsCreator} from "../redux/actions";
import Loader from "./Loader";

export default props => {
    const dispatch = useDispatch();
    const fetchedPosts = useSelector(state => state.posts.fetchedPosts)

    if (!fetchedPosts?.length) {
        return (
            <button
                className={"btn btn-primary"}
                onClick={() => dispatch(fetchPostsCreator())}
            >
                {"Load..."}
            </button>
        );
    }

    return fetchedPosts.map(
        (post, key) => <PostItem
            post={post}
            key={key}
        />
    );
};


