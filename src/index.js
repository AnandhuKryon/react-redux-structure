import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import ContextProvider from './context';
import App from './components';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
