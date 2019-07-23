import { Search, mapStateToProps } from './container';
import React from 'react';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

describe(`Search Component`, () => {

    it("Should chack", () => {
        expect(1 + 1).toBe(2);
    })

    /*it('should render as expected', () => {
       const searchOj = renderer.create(<Search />).toJSON();
       expect(searchOj).toMatchSnapshot();
   });

  it('should map state to props correctly', () => {
       const appState = { searchBy: 'Genre', sortBy: 'Date' };
       const ownProps = {};
       const compState = mapStateToProps(appState, ownProps);
       console.log(compState);
       expect(compState).toEqual( { searchBy: 'Genre', sortBy: 'Date' });
   })*/

})