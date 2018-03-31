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
import { INCREMENT, DECREMENT } from "./constants/action-types";
const defaultState = {
	counter: 5
}
const store = createStore(reducer, defaultState);

/*
* This is used for testing Redux?
*
* You can run such things as:
* getState for accessing the current state of the application
* dispatch for dispatching an action
* subscribe for listening on state changes
*
* Source: https://www.valentinog.com/blog/react-redux-tutorial-beginners/#React_Redux_tutorial_who_this_guide_is_for
*/

// React Question: I don't understand this ES6 here
export const increaseNumber = counter => ({ type: INCREMENT});
export const decreaseNumber = counter => ({ type: DECREMENT});

// Making global variables to make accessible in the Console (???)
window.testStore = store;
window.testIncreaseNumber = increaseNumber;
window.testDecreaseNumber = decreaseNumber;

ReactDOM.render(
	<Provider store={store}>
    	<App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
