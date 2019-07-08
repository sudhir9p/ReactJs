import React from 'react';
import { connect } from "react-redux";
import { searchMovies, sortMovies } from '../../../core/state/actions';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchClick = () => {
        debugger;
        if (this.state.searchText) {
            this.props.dispatch(searchMovies(this.state.searchText));
        }
    }

    onSortBy = (sortBy) => {
        this.props.dispatch(sortMovies(sortBy));
    }

    onSearchTextChange = (e) => {
        this.setState({ searchText: e.target.value });
    }


    render() {
        return (
            <div>
                <h1 className="title">Find your movie</h1>
                <div className="input-group mb-3">
                    <input className="form-control serachText"
                        type="text"
                        id="search"
                        placeholder="Search..." onChange={this.onSearchTextChange}
                    />

                </div>
                <br></br>
                <div>
                    <div className="input-group">
                        <button onClick={this.onSearchClick} className="btn btn-success-cus fc-button">Search</button>
                        <button onClick={() => { this.onSortBy("Genres") }} className="btn btn-success-cus fc-button">Genres</button>
                        <button onClick={() => { this.onSortBy("Title") }} className="btn btn-success-cus fc-button">Title</button>
                    </div>
                </div>
                <div className="sortByDiv"><span className="bold text-color">Sort By:</span>
                    <button onClick={() => { this.onSortBy("ReleaseDate") }} className="btn btn-success-cus fc-button">Release Date</button>
                    <button onClick={() => { this.onSortBy("Rating") }} className="btn btn-success-cus fc-button">Rating</button>
                </div>
            </div>
        );

    }

}

const mapStateToProps = state => ({
    searchBy: state.searchBy,
    sortBy: state.SortBy
});



export default connect(mapStateToProps)(SearchForm)