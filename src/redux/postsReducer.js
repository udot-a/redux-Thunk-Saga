import {CREATE_POST, FETCH_POST} from "./types";

const initialState = {
    posts: [
        {
            title: "Dron will be here...",
            id: 1
        },
        {
            title: "Max coming on ...",
            id: 2
        },
    ],
    fetchedPosts: []
}

export const postsReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state,posts: [...state.posts, action.payload]}

        case FETCH_POST:
            return { ...state, fetchedPosts: action.payload}
        default: return state;
    }
}

