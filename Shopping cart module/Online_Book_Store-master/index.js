import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cartReducer from './components/reducers/cart-reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import bootstrap from "bootstrap/dist/css/bootstrap.css";
const store = createStore(cartReducer);
ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root')
);



