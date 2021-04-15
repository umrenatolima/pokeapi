import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AppProvider from './hooks';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
