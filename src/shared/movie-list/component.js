import React from 'react';
import { MoviesCard } from '../movie-card/component';

export class MoviesList extends React.Component {
    
    render() {
        return (
            <div className="movie-list-container">
                {this.props.movies.map(movie => <MoviesCard movie={movie} />)}
            </div>
        )
    }
}

// export default MoviesList;