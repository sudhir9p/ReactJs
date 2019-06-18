import React from 'react';
import { Input } from '../common/input/input';
import { Button } from '../common/button/button';
import { MoviesList } from '../movies-list/movies-list';

export class MovieSearch extends React.Component {
    onSearchInputKeyUp = (e) => {
        console.log('KEY PRESS');
    }

    onSearchClick = (e) => {

    }

    render() {
        return (
            <>
                <header>FIND Your Movie</header>
                <Input placeholder="Browse movies" keyUpHandler={this.onSearchInputKeyUp}></Input>
                <Button text="SEARCH" onclick={this.onSearchClick}></Button>
                <MoviesList ></MoviesList>

            </>
        )
    }
}