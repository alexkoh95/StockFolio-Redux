import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Setting up Redux Store 
/*
Make the store available to the React components by putting a React-Redux provider around the application
*/
import {store} from "./store/store"
import {Provider} from "react-redux"


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


