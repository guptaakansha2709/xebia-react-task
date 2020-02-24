import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch } from 'react-router-dom';
import store from "./store/redux-store";
import RouteComponent from './components/route.component';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={store}>
            <Router>
                <Switch>
                    <RouteComponent />
                </Switch>
            </Router>
        </Provider>
    </MuiPickersUtilsProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
