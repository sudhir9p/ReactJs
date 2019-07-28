import { Search, mapStateToProps } from './container';
import React from 'react';
import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import "isomorphic-fetch";

configure({ adapter: new Adapter() });

describe(`Search Component`, () => {

    it("Should chack", () => {
        expect(1 + 1).toBe(2);
    })

    it('should render as expected', () => {
        //jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({}))
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({}));
        const component = shallow(<Search />);
        expect(component).toBeTruthy();
   });

  it('should map state to props correctly', () => {
       const appState = { searchBy: 'Genre', sortBy: 'Date' };
       const ownProps = {};
       const compState = mapStateToProps(appState, ownProps);
       console.log(compState);
       expect(compState).toEqual( { searchBy: 'Genre', sortBy: 'Date' });
   })

})