import React from 'react';
import MoviesCard from '../movie-card';

export const MoviesList = (props) => {
    return (
        <div className="movie-list-container">
            {props.movies.map(movie => <div key={movie.id} > <MoviesCard movie={movie} onMovieClick={props.onMovieClick} /></div>)}
        </div>
    )
}

export default MoviesList;