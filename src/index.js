import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Home from './views/Home/index';
import NotFound from './views/NotFound/index';

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/home" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

