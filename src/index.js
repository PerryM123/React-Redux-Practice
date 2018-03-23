/*
References:
React-Redux Basics
-https://medium.com/@MKulinski/react-redux-basics-a36914c0035d

Nice Example:
-https://github.com/narendravaghela/react-redux-basic

*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers/reducer';

const defaultState = {
	count: 0
}
const store = createStore(reducer, defaultState);

// const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
    	<App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
