import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

// import { createStore } from 'redux';
// import counterReducer from './redux Services/reducer/Count_reducer';
// import bookData from './redux Services/reducer/Book_reducer';

// const store = createStore(counterReducer);
// const bookStore = createStore(bookData);

// const root = ReactDOM.createRoot(document.getElementById('root'));
import store from './redux Services/Store'
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
