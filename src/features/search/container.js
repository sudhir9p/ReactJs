import React from 'react';
import SearchForm from './search-form/index';
import { connect } from "react-redux";
import { fetchMovies, searchMovies, movieSearchText } from '../../core/state/actions';
import { configuration } from '../../../config/config.json'
import SearchResult from './search-results'

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        this.getMovies().then(res => {
            this.setState({ data: res.data });

        })
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('TYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');
    }


    getMovies = () => {
        return fetch(configuration.apiUrl).then(data => {
            return data.json()
        });
    }

    render = () => {
        return (
            <div className="searchForm">
                <SearchForm></SearchForm>
                <SearchResult data={this.state.data} history={this.props.history} onMovieClick={this.props.onMovieClick}></SearchResult>
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