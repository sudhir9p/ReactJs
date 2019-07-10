import React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Search from '../../features/search';
import MoviesDetails from '../../features/details';
import PageNotFound from '../../shared/page-notfound';
import { Provider } from 'react-redux';
import './app.css';

import store from '../../core/state/store';


export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Search} />
                        <Route path='/details/:id' component={MoviesDetails} />
                        <Route path='/*' component={PageNotFound} />
                        <Redirect from='*' to='/404' />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;