import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Search } from '../../features/search/index';
import { MoviesDetails } from '../../features/details/index';
import './app.css';


export class App extends React.Component {
    render() {
        return (<Router>
            <Route exact path='/' component={Search} />
            <Route path='/details' component={MoviesDetails} />
        </Router>
        )
    }
}

export default App;