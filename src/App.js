import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import SingleTerm from './containers/SingleTerm';
import AddNewTerm from "./containers/AddNewTerm";
import SearchResults from "./containers/SearchResults";

class App extends Component {


    render(){
      return (
        <Fragment>

        <Router>
    <Switch>

    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/Signup" exact component={Signup} />
    <Route path="/search/:query" component={SearchResults} />
    <Route path="/:topic/:term" component={SingleTerm}/>

    <Route path="/new" component={AddNewTerm} />
    { /* Finally, catch all unmatched routes */}

            </Switch>
        </Router>


        </Fragment>
      );

    }

    }

    export default App
