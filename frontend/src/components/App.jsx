import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';

import '../assets/styles/Global.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
