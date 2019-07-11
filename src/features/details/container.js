import React from 'react';
import './details.css';
import { connect } from "react-redux";
import { configuration } from '../../../config/config.json';

export class MoviesDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
        this.getMoviesById(configuration.apiUrl + '/' + this.props.match.params.id).then(res => {
            this.setState({ movie: res });

        });
    }

    getMoviesById = (url) => {
        return fetch(url).then(data => {
            return data.json()
        });
    }

    render() {
        return (
            <div className="movie-details">
                <div className="row">
                    <div className="col-sm-3 details-image">
                        <img src={this.state && this.state.movie? this.state.movie.poster_path : ''} />
                    </div>
                    <div className="col-sm-6 details-content">
                        <div className="row">
                            <h2 className="details-title" >{this.state && this.state.movie ? this.state.movie.title : ''}</h2> <span className="details-rating">4.3</span>
                        </div>
                        <div className="row details-yearmin">
                            <p className="details-year">{this.state && this.state.movie ? this.state.movie.year: ''}</p> <p className="details-year-text">year</p> <p className="details-mins">{this.state && this.state.movie ? this.state.movie.runtime : ''}</p> <p className="details-mins-text">mins</p>
                        </div>
                        <div className="row details-movie-desc">
                            <p>{this.state && this.state.movie ?  this.state.movie.overview: ''}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sortBy: state.sortBy,
    searchBy: state.searchBy
});

export default connect(mapStateToProps)(MoviesDetails)
