import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import throttle from "lodash/throttle";
import loggerMiddleware from "redux-logger";

import rootReducer from "./reducers/index";

const Enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const middlewareEnhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);
const composedEnhancers = Enhancers(middlewareEnhancer);

// let persistedState = loadState() ? loadState() : {};

const store = createStore(rootReducer, {}, composedEnhancers);

store.subscribe(
  throttle(() => {
//    saveState(store.getState());
  }, 1000)
);
export default store;
