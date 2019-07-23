import { SearchResult } from './container';
import React from 'react';
import renderer from 'react-test-renderer';

describe(`Search-Result Component`, () => {
    
    it('should render as expected', () => {
        const searchOj = renderer.create(<SearchResult />).toJSON();
        expect(searchOj).toMatchSnapshot();
    });

})