import React from 'react';
import { shallow } from 'enzyme';
import { ItemView } from '../ItemView';

const mockState = {
  item: {
    pending: false,
    error: null,
    items: {},
  }
};

const mockItems = {
  1: {
    id: "1",
    name: "TV",
    price: 400000,
    time_remaining: 18427,
    views: 54,
  },
}

describe('ItemView', () => {
  it('renders the itemiew correctly', () => {
    const wrapper = shallow(
      <ItemView
        item={mockItems["1"]}
        route={{params: {id: '1'}}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});