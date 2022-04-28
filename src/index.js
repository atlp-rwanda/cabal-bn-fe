/* eslint-disable comma-dangle */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AllRoutes from './routes';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AllRoutes />
  </Provider>,
  document.getElementById('root')
);
module.hot.accept();
