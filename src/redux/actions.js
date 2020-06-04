import {CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER} from "./types";

export const addPostCreator = payload  => ({type: CREATE_POST, payload});

export const hideAlert = () => ({type: HIDE_ALERT});

export const showAlert = payload => dispatch =>{
    dispatch({type: SHOW_ALERT, payload});

    setTimeout(()=> dispatch(hideAlert()), 1500);
}

export const showLoad = () => ({type: SHOW_LOADER});
export const hideLoad = () => ({type: HIDE_LOADER});



export const fetchPostsCreator = () => ({ type: REQUEST_POSTS})
//     async dispatch => {
//         let payload;
//
//         dispatch({type: SHOW_LOADER});
//
//         try {
//             payload = await (await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')).json();
//             setTimeout(() => {
//                 dispatch({type: FETCH_POST, payload});
//
//                 dispatch({type: HIDE_LOADER});
//             }, 500);
//
//         } catch (err) {
//             dispatch({type: HIDE_LOADER});
//
//             dispatch(showAlert("Some thing wrong in network properties..."))
//         }
//
// }