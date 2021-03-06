import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import {App} from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/goit-react-hw-08-phonebook/'>
          <App />
        </BrowserRouter>
      </PersistGate>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

