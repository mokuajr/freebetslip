import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Landing from "./components/Landing";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import Home from "./components/pages/viptips/Home";
import Account from "./components/user/Account";
import Admin from "./components/dashboard/Admin";
import PasswordForget from "./components/user/PasswordForget";
import { withAuthentication } from "./components/Session";

import Contacts from "./components/pages/Contacts";
import Navigation from "./components/Navigation";
import JoinVip from "./components/pages/JoinVip";

const App = () => (
  <Router>
    <Navigation />

    <hr />

    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route path={ROUTES.SIGN_UP} component={SignUp} />
    <Route path={ROUTES.SIGN_IN} component={SignIn} />
    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
    <Route path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.ACCOUNT} component={Account} />
    <Route path={ROUTES.ADMIN} component={Admin} />
    <Route path={ROUTES.JOINVIP} component={JoinVip} />

    <Route path={ROUTES.CONTACT_US} component={Contacts} />
  </Router>
);

export default withAuthentication(App);
