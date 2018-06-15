import './assets/Font-Awesome/css/fontawesome.min.css'
import './grid/bootstrap-grid.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from "react-redux/es/components/Provider";
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import { Router } from 'react-router-dom';
import registerServiceWorker from './utilities/registerServiceWorker';
import App from './components/App';
import rootReducer from './store/rootReducer';
import rootSaga from './store/rootSaga';

const history = createHistory();
const store = configureStore({}, rootReducer, rootSaga);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>),
  document.getElementById('root'));
registerServiceWorker();
