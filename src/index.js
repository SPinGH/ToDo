import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './containers/Home/Home';
import Statistics from './containers/Statistics/Statistics';
import Tasks from './containers/Tasks/Tasks';
import NotFound from './components/NotFound/NotFound';
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/statistics" component={Statistics} />
            <Route path="*" component={NotFound} />
          </Switch>
        </App>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
),
  document.getElementById('root')
);