import React from 'react';
import { MoviesCard } from '../movie-card/movie-card';
import { movies } from '../../../data/movies.json'

export class MoviesList extends React.Component {
    render() {
        return (
            <>
                {movies.map(movie => <MoviesCard movie={movie} />)}
            </>
        )
    }
}