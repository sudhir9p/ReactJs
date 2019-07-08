import React from 'react';
import MoviesList from '../../../shared/movie-list';

export class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }


    onMovieClick = (movie) => {
        this.props.history.push({
            pathname: `/details/${movie.id}`
        });
    }

    render = () => {
        console.log('BBBBBBBBBB');
        console.log(this.props);
        return (
            <MoviesList movies={this.props.data ? this.props.data : []} history={this.props.history} onMovieClick={this.onMovieClick}></MoviesList>
        );

    }

}

export default SearchResult;

