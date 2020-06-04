import React from 'react';
import PostForm from "./components/PostForm"
import Posts from "./components/Posts";
import FetchedPost from "./components/FetchedPost";
import {useSelector} from "react-redux";
import Loader from "./components/Loader";

function App() {
    const loading = useSelector(state => state.app.loading);

    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h2>{"Синхронные посты"}</h2>

                    <Posts/>
                </div>

                <div className="col">
                    <h2>{"Асинхронные посты"}</h2>

                    <FetchedPost/>
                </div>
            </div>
            {loading && <Loader/>}
        </div>
    );
}

export default App;
