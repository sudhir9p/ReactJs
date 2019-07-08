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


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('AAAAAAAAAAAAAAAAABBBBBBBBbbb');
        debugger;
        const search = this.props.searchBy ? this.props.searchBy : "";
        const sortBy = this.props.sortBy ? this.props.sortBy : "";
        console.log(search)
        this.getMovies(stringFormat(configuration.apiSortUrl, sortBy, "desc", search)).then(res => {
            //  this.setState({ data: res.data });
            debugger;
            //this.setState({ data: res.data });  

        });
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