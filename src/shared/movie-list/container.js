import React from 'react';
import { MoviesCard } from '../movie-card/index';
import { withRouter } from 'react-router';

export class MoviesList extends React.Component {

    onMovieClick = (movie) => {
        this.props.history.push({
            pathname: '/details',
            data: {
                movie
            }
        });
    }

    render() {
        return (
            <div className="movie-list-container">
                {this.props.movies.map(movie => <div key={movie.id} onClick={() => this.onMovieClick(movie)}> <MoviesCard movie={movie}  /></div>)}
            </div>
        )
    }
}

export default withRouter(MoviesList);