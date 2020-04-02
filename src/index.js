import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import logo from './logo.svg';
import './App.css';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <App />
        </header>
      </div>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
