
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage.js';
import { Login } from './components/authentification/Login.js';
import { Signup } from './components/authentification/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './App.css';

class App extends Component {
        render() {
        return (
        <div className="App">
            <div className="App-content">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <PrivateRoute path='/homepage' component={Homepage} />
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;
