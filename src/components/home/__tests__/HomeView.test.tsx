import React from 'react';
import { shallow } from 'enzyme';
import { HomeView } from '../HomeView';

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

describe('HomeView', () => {
  it('renders the HomeEmptyView when no items are found', () => {
    const wrapper = shallow(
      <HomeView
        itemPending={mockState.item.pending}
        itemError={mockState.item.error}
        items={mockState.item.items}
        fetchAllItems={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the HomeView correctly when there is at least one item', () => {
    const wrapper = shallow(
      <HomeView
        itemPending={mockState.item.pending}
        itemError={mockState.item.error}
        items={mockItems}
        fetchAllItems={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});