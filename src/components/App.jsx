import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import { UserContextProvider } from '../context/userContext';

import '../assets/styles/Global.scss';

const App = () => (
  <UserContextProvider>
    <BrowserRouter>
      <Layout>
	<Switch>
	  <Route exact path='/' component={Login} />
	  <Route exact path='/register' component={Register} />
	  <Route exact path='/home' component={Home} />
	</Switch>
      </Layout>
    </BrowserRouter>
  </UserContextProvider>
);

export default App;
