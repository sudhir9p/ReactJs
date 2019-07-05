
import MoviesList from '../../shared/movie-list';
import React from 'react';

export const SearchComponent = (props) => {
    return (
        <div className="searchForm">
            
            <MoviesList movies={props.data} history={props.history} onMovieClick={props.onMovieClick}></MoviesList>
        </div>
    )
}


export default SearchComponent;