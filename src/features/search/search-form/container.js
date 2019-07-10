import React from 'react';
import { connect } from "react-redux";
import { searchMovies, sortMovies } from '../../../core/state/actions';
import { SearchFormComponent } from './component'

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchClick = () => {
        if (this.state.searchText) {
            this.props.searchByMap(this.state.searchText);
        }
    }

    onSortBy = (sortBy) => {
        this.props.sortByMap(sortBy);
    }

    onSearchTextChange = (e) => {
        this.setState({ searchText: e.target.value });
    }


    render() {
        return (
            <SearchFormComponent data={this.props.data} onSearchTextChange={this.onSearchTextChange} history={this.props.history} onSortBy={this.onSortBy} onMovieClick={this.props.onMovieClick}></SearchFormComponent>
        )
    }

}

const mapStateToProps = state => ({
    searchBy: state.searchBy,
    sortBy: state.SortBy
});


const mapDispatchToProps = dispatch => ({
    searchByMap: (value) => {
        dispatch(searchMovies(value));
    },
    sortByMap: (value) => {
        dispatch(sortMovies(value));
    }
});



export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)