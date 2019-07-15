import React from 'react';
import SearchForm from './search-form/index';
import { connect } from "react-redux";
import { fetchMovies, searchMovies, movieSearchText } from '../../core/state/actions';
import { configuration } from '../../../config/config.json'
import SearchResult from './search-results';
import { stringFormat } from './utils';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        this.getMovies(configuration.apiUrl).then(res => {
            this.setState({ data: res.data });

        });
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.searchBy != this.props.searchBy || prevProps.sortBy != this.props.searchBy) {
            const search = this.props.searchBy ? this.props.searchBy : "";
            const sortBy = this.props.sortBy ? this.props.sortBy : "";
            const movies = await this.getMovies(stringFormat(configuration.apiSortUrl, sortBy, "desc", search));
            this.setState({ data: movies.data });
        }
    }


    getMovies = (url) => {
        return fetch(url).then(data => {
            return data.json()
        });
    }

    render = () => {
        return (
            <div className="searchForm">
                <SearchForm></SearchForm>
                <SearchResult data={this.state.data} history={this.props.history}  onMovieClick={this.props.onMovieClick}></SearchResult>
            </div>
        );
    }

}



//export default Search;
const mapStateToProps = state => ({
    sortBy: state.sortBy,
    searchBy: state.searchBy
});

export default connect(mapStateToProps)(Search)