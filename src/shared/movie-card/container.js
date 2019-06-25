import React from 'react';

export class MoviesCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const movie = this.props.movie;
        return (
            <div className="movie-card" onClick={() => this.props.onMovieClick(movie)}>
                <img src={movie.poster_path} alt={movie.title} />
                <p className="txtcolor">{movie.title}</p>
                <p className="bold">Release Date: <span className="normal">{movie.release_date}</span></p>
                <p className="bold">Rating: <span className="normal">{movie.vote_count}</span></p>
                <p className="bold">Genre: <span className="normal">{movie.genres.join(", ")}</span></p>
            </div>
        )
    }
}

export default MoviesCard;