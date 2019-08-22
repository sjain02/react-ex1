import { combineReducers, createStore } from "redux";
import headerReducer from "../reducers/header";
export default () => {
  const appStore = createStore(
    combineReducers({
      header: headerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return appStore;
};
