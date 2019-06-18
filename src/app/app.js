import React from 'react';
import { MovieSearch } from './movies-search/movies-search'
import './app.css';

export default class App extends React.Component {

    render() {
        return (
            <>
                <div>{this.props.title}</div>
                <MovieSearch />
            </>
        );
    }
}