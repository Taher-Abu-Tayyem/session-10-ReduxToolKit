import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider  } from 'react-redux';
// //import { store } from './store/Index';
import { store } from './rtk/store';


// const WITHDRAW_MONEY = "WITHDRAW-MONEY";
// const DEPOSITE_MONEY = "DEPOSITE_MONEY";

// const withdraw = (amount) => {
//   return {
//     type: WITHDRAW_MONEY,
//     payload: amount,
//   };
// };

// const deposite = (amount) => {
//   return {
//     type: DEPOSITE_MONEY,
//     payload: amount,
//   };
// };

// const bankReducer = (state = 1000, action) => {
//   switch (action.type) {
//     case WITHDRAW_MONEY:
//       return state - action.payload;

//     case DEPOSITE_MONEY:
//       return state + action.payload;

//     default:
//       return state;
//   }
// };

// const store = createStore(bankReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
