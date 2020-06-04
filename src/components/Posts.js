import React from "react";
import PostItem from "./PostItem";
import {connect} from "react-redux";

const Posts = ({posts}) => {
    if (!posts?.length) {
        return (
            <p className={"text-center"}>{"Постов пока нет!!!"}</p>
        );
    }
    console.log("POSTS is: ", posts)
    return posts.map(
        (post, key) => <PostItem
                            post={post}
                            key={key}
                        />
    );
}

const mapStateToProps = state => ({
    posts: [...state.posts.posts]
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, null)(Posts);