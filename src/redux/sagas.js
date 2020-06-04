import {takeEvery, put, call} from "@redux-saga/core/effects";
import {FETCH_POST, HIDE_LOADER, REQUEST_POSTS} from "./types";
import {hideLoad, showAlert, showLoad} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
    try {
        yield put(showLoad());

        const payload = yield call(fetchPosts);

        yield put({type: FETCH_POST, payload});

        yield put(hideLoad());
    } catch (e) {
        yield put({type: HIDE_LOADER});

        yield put(showAlert("Some thing wrong in network properties..."));
    }
}

async function fetchPosts() {
    return await (await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')).json();
}