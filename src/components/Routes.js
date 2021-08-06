import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employee from './training/Employee';
import MyForm from './training/MyForm';
import Home from './training/Home';
import PageNotFound from './training/PageNotFound';
import MaterialUiSample from './training/MaterialUiSample';
import Header from './Header';
import Footer from './Footer';
import Welcome from './training/Welcome';
import Login from './training/Login';
import DataMapper from '../redux/DataMapper';

const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header></Header>
                    {/* <Link to="/home">Home</Link> {'  '}
                <Link to="/emp">Employee</Link> {'  '}
                <Link to="/form">MyForm</Link> {'  '}
                <Link to="/mat">MaterialUiSample</Link> {'  '} */}
                    <div className="container">
                        <Switch>
                            {/* add an exact path to base url  */}
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/welcome"> <Welcome /> </Route>
                            <Route path="/emp"> <Employee /> </Route>
                            <Route path="/form"><MyForm /></Route>
                            <Route path="/home"><Home /></Route>
                            <Route path="/mat"><MaterialUiSample /></Route>
                            <Route path="/datamapper"> <DataMapper /> </Route>
                            <Route path="/login"><Login /></Route>
                            <Route path="/*"><PageNotFound /></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            {/* <Footer /> */}
        </div>
    );
};
export default Routes;
