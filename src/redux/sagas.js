import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import axios from "axios";

function* getSneakers({ payload: { pageSize, pageIndex } }) {
    const res = yield call(
        axios.get,
        `https://shopping-cart-v02.herokuapp.com/api/products?pageSize=${pageSize}&&pageIndex=${pageIndex}`
    );
    yield put(actions.getSneakerSucess(res.data.products, res.data.total));
}

function* onGetSneakers() {
    yield takeEvery(actionTypes.GET_SNEAKER_START, getSneakers);
}

function* getClothing({ payload: { pageSize, pageIndex } }) {
    const res = yield call(
        axios.get,
        `https://shopping-cart-v02.herokuapp.com/api/products?category=clothing&&pageSize=${pageSize}&&pageIndex=${pageIndex}`
    );
    yield put(actions.getClothingSuccess(res.data.products, res.data.total));
}

function* onGetClothing() {
    yield takeEvery(actionTypes.GET_CLOTHING_START, getClothing);
}

function* getAdmin({ payload: { pageSize, pageIndex } }) {
    const resAll = yield call(
        axios.get,
        `https://shopping-cart-v02.herokuapp.com/api/products?&&pageSize=${pageSize}&&pageIndex=${pageIndex}`
    );
    const res = yield call(
        axios.get,
        `https://shopping-cart-v02.herokuapp.com/api/products?&&pageSize=${resAll.data.total}`
    );
    yield put(actions.getAdminSuccess(res.data.products, res.data.total));
}

function* onGetAdmin() {
    yield takeEvery(actionTypes.GET_ADMIN_START, getAdmin);
}

function* getCate() {
    const res = yield call(axios.get, `https://shopping-cart-v02.herokuapp.com/api/categories`);
    yield put(actions.getCateSuccess(res.data));
}

function* onGetCate() {
    yield takeEvery(actionTypes.GET_CATE_START, getCate);
}

function* createAdmin(action) {
    const res = yield call(axios.post, `https://shopping-cart-v02.herokuapp.com/api/products`, action.payload);
    yield put(actions.createAdminSuccess(res.data));
}

function* onCreateAdmin() {
    yield takeEvery(actionTypes.CREATE_ADMIN_START, createAdmin);
}

export default function* containAllSagas() {
    yield all([
        fork(onGetSneakers),
        fork(onGetClothing),
        fork(onGetAdmin),
        fork(onGetAdmin),
        fork(onGetCate),
        fork(onCreateAdmin),
    ]);
}
