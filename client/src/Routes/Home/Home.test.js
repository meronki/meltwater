import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';
import '@testing-library/jest-dom/extend-expect';

test('Search input autofocus', () => {
  render(<Home />);
  const searchInput = screen.getByRole('searchbox');
  expect(searchInput).toHaveFocus();
});

describe('Search Input value', () => {
  it('updates on change', () => {
    const setSearch = jest.fn(() => {});

    render(<Home setSearch={setSearch} />);

    const searchInput = screen.getByRole('searchbox');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });
});
