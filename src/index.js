import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './containers/Home/Home';
import Statistic from './containers/Statistic/Statistic';
import Tasks from './containers/Tasks/Tasks';
import NotFound from './components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/statistics' component={Statistic} />
          <Route path='*' component={NotFound} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>
),
  document.getElementById('root')
);