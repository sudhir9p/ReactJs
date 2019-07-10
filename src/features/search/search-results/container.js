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
        return (
            <MoviesList movies={this.props.data ? this.props.data : []}  onMovieClick={this.onMovieClick}></MoviesList>
        );

    }

}

export default SearchResult;

