import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'

//import App from './App';
import LoginComponent from './components/Login.component';
import DashboardComponent from './components/Dashboard.component';
import registerServiceWorker from './registerServiceWorker';
import history from './redux/history'


// Add these imports - Step 1
import { Provider } from 'react-redux';
import store from './redux/store';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={LoginComponent} />
                <Route path="/dashboard" component={DashboardComponent} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
