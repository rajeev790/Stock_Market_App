import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Portfolio from './pages/Portfolio';
import StockDetails from './pages/StockDetails';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/stock/:stockId" component={StockDetails} />
            </Switch>
        </Router>
    );
};

export default App;
