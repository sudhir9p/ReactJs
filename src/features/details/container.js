import React from 'react';
import './details.css';

export class MoviesDetails extends React.Component {
    constructor(props) {

        super(props);
        this.movie = this.props.location.data.movie;
    }

    render() {
        return (
            <div className="movie-details">
                <div className="row">
                    <div className="col-sm-3 details-image">
                        <img src={this.movie.poster_path} />
                    </div>
                    <div className="col-sm-6 details-content">
                        <div class="row">
                            <h2 className="details-title" >{this.movie.title}</h2> <span className="details-rating">4.3</span>
                        </div>
                        <div class="row details-yearmin">
                            <p class="details-year">{this.movie.year}</p> <p class="details-year-text">year</p> <p class="details-mins">{this.movie.runtime}</p> <p class="details-mins-text">mins</p>
                        </div>
                        <div className="row details-movie-desc">
                            <p>{this.movie.overview}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesDetails;