import { SearchForm, mapStateToProps } from './container';
import React from 'react';
import renderer from 'react-test-renderer';

describe(`Search-form Component`, () => {
    it('should add', () => {
        expect(2 + 2).toEqual(4);
    });

    it('should render as expected', () => {
        const searchOj = renderer.create(<SearchForm />).toJSON();
        expect(searchOj).toMatchSnapshot();
    });

    it('should map state to props correctly', () => {
        const appState = { searchBy: 'Genre', SortBy: 'Date' };
        const ownProps = {};
        const compState = mapStateToProps(appState, ownProps);
        console.log(compState);
        expect(compState).toEqual( { searchBy: 'Genre', sortBy: 'Date' });
    })

})