import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

describe('App', () => {
  it('should render correctly', () => {

    const props = {
        modal: {
          isOpen: false
        },
        loadData: jest.fn()
    };

    const component = shallow(<App {...props}/>);
    console.log(component);
    expect(component).toMatchSnapshot();

  });
});
