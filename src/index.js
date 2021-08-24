import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore , applyMiddleware } from 'redux';
import authReducer from "./Redux/Reducer/auth.reducer";
import thunk from "redux-thunk";


const store = createStore(authReducer,applyMiddleware(thunk));

ReactDom.render(
<Provider store={store}>
<App/> 
</Provider>
, document.getElementById('root'));