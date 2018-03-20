import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import LoginComponent from './components/Login.component';
import registerServiceWorker from './registerServiceWorker';


// Add these imports - Step 1
import { Provider } from 'react-redux';
import store from './redux/store';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
    <Provider store={store}>
        <LoginComponent />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
