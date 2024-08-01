import { takeLatest, call, put } from 'redux-saga/effects'
import sendGetReq from '@/services/ajax';
function* getPosts(data) {
    const res = yield call(sendGetReq, "https://jsonplaceholder.typicode.com/posts", data)
    yield put({
        type: "UPDATE_POSTS",
        payload: res.data
    })
}

function* getPostById() {

}

function* postsSaga() {
    yield takeLatest("GET_POSTS", getPosts)
    yield takeLatest("GET_POSTS_BY_ID", getPostById)
}

export default postsSaga;









