import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Layout from './Layout';
import '../assets/styles/App.scss';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App