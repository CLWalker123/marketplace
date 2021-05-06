import {
  itemPendingSelector,
  itemErrorSelector,
  itemsSelector,
  generateItemFromItemIdSelector
} from '../selectors';

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

describe('Item Selectors', () => {
  it('Should select item.pending', () => {
    const pending = itemPendingSelector(mockState);
    expect(pending).toBe(false);
  });
  it('Should select item.error when it is null', () => {
    const error = itemErrorSelector(mockState);
    expect(error).toBe(null);
  });
  it('Should select item.error when it is a string', () => {
    const error = itemErrorSelector({ item: { ...mockState.item, error: 'test' }});
    expect(error).toBe('test');
  });
  it('Should select item.items when it is empty', () => {
    const items = itemsSelector(mockState);
    expect(items).toEqual({});
  });
  it('Should select item.items when it has items', () => {
    const items = itemsSelector({ item: { ...mockState.item, items: mockItems }});
    expect(items).toBe(mockItems);
  });
  it('Should select the correct item when it exists', () => {
    const item = generateItemFromItemIdSelector("1")({ item: { ...mockState.item, items: mockItems }});
    expect(item).toBe(mockItems["1"]);
  });
})