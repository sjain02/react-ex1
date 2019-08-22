import React from "react";
import ReactDOM from "react-dom";

import { setTitle, setSubtitle, setHeader } from "./actions/header";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";

const appRoot = document.getElementById("app");
const appStore = configureStore();
appStore.dispatch(
  setHeader({ title: "Both configured", subtitle: "configured in single call" })
);
appStore.dispatch(setTitle("This is title rendered dynamically"));

ReactDOM.render(<AppRouter appStore={appStore} />, appRoot);
