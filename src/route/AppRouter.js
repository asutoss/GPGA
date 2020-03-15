import React from 'react';
import '../firebase/firebase';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import MainPage from '../components/mainPage';

export const history = createHistory();

class AppRouter extends React.Component {

    render(){
        return(
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/' component={MainPage} exact={true}/>
                        <Route path='/login' component={LoginPage} exact={true}/>
                        <Route path='/register' component={RegisterPage} exact={true}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default AppRouter;


