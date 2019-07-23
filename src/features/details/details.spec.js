import { MoviesDetails, mapStateToProps } from './container';
import React from 'react';
import renderer from 'react-test-renderer';

describe(`Movie Details Component`, () => {
    it('should add', () => {
        expect(2 + 2).toEqual(4);
    });

    it('should render as expected', () => {
        const searchOj = renderer.create(<MoviesDetails />).toJSON();
        expect(searchOj).toMatchSnapshot();
    });

    it('should map state to props correctly', () => {
        const appState = { searchBy: 'Title', sortBy: 'Rating' };
        const ownProps = {};
        const compState = mapStateToProps(appState, ownProps);
        console.log(compState);
        expect(compState).toEqual( { searchBy: 'Title', sortBy: 'Rating' });
    })

})