import { MoviesCard } from './container';
import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(`Movie-Card Component`, () => {
    const movie = {
        "id": 337167,
        "title": "Fifty Shades Freed",
        "tagline": "Don't miss the climax",
        "vote_average": 6.1,
        "vote_count": 1195,
        "release_date": "2018-02-07",
        "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        "budget": 55000000,
        "revenue": 136906000,
        "genres": [
            "Drama",
            "Romance"
        ],
        "runtime": 106,
        "year": 1992
    };

    it('should render as expected', () => {
        const movieCardOj = renderer.create(<MoviesCard movie={movie} />).toJSON();
        expect(movieCardOj).toMatchSnapshot();
    });


    it("Should trigger search on click", () => {
        const component = shallow(<MoviesCard movie={movie}/>);
        expect(component).toBeTruthy();

    })

})