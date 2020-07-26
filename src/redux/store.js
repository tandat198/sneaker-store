import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = sagaMiddleware;
const store = createStore(reducer, applyMiddleware(middlewares));

sagaMiddleware.run(saga);

export default store;
