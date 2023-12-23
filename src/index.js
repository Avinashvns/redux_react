import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

//  React redux
// import { createStore } from 'redux';
// import counterReducer from './redux Services/reducer/Count_reducer';
// import bookData from './redux Services/reducer/Book_reducer';

// const counterStore = createStore(counterReducer);
// const bookStore = createStore(bookData);

// Using React Toolkit
import store from './reduxtoolkit/Store_toolkit'

ReactDOM.render(
  // <Provider store={counterStore} >
  <Provider store={store} >
    {/* <Provider store={bookStore} > */}
    <App />
    {/* </Provider> */}
    {/*  */}
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
