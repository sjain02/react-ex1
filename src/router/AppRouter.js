import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Founders from "../components/Founders";
import PageNotFound from "../components/PageNotFound";
import React from "react";
import { Provider } from "react-redux";

const AppRouter = ({ appStore }) => (
  <Provider store={appStore}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Body} exact={true} />
        <Route path="/founders" component={Founders} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Provider>
);
export default AppRouter;
