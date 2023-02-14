import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import Main from './Main';
// import store from "./store"

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

