import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CensorForm } from './CensorForm';
import { BrowserRouter } from 'react-router-dom';

test('title', async () => {
  const data = {
    id: 1,
    title: "CIA's Blackops in Ukraine",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, ipsa! Accusamus, architecto minima dicta numquam ipsum  aspernatur deserunt perspiciatis quia, sint reprehenderit, asperiores ipsum repudiandae adipisci assumenda officia magnam hic laudantium. Ipsam, ullam. Magni, rerum voluptatem perferendis incidunt quaerat dicta recusandae delectus dolores. In exercitationem voluptatum quos atque. Aperiam est vitae possimus aliquid quisquam. Vero exercitationem ipsum tempora nihil saepe fugit aliquid omnis quam. Rem explicabo mollitia molestiae ipsum sequi provident dolore tempore. Amet omnis sed harum vitae reprehenderit non magni quo magnam beatae fuga ex natus quam id alias ducimus, impedit ipsam explicabo tempora fugit. Quas amet soluta consequuntur!`,
  };
  render(
    <BrowserRouter>
      <CensorForm data={data} />
    </BrowserRouter>
  );
  const title = await screen.getByRole('heading');
  expect(title).toBeInTheDocument();
});

test('input autofocus', async () => {
  const data = {
    id: 1,
    title: "CIA's Blackops in Ukraine",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, ipsa! Accusamus, architecto minima dicta numquam ipsum  aspernatur deserunt perspiciatis quia, sint reprehenderit, asperiores ipsum repudiandae adipisci assumenda officia magnam hic laudantium. Ipsam, ullam. Magni, rerum voluptatem perferendis incidunt quaerat dicta recusandae delectus dolores. In exercitationem voluptatum quos atque. Aperiam est vitae possimus aliquid quisquam. Vero exercitationem ipsum tempora nihil saepe fugit aliquid omnis quam. Rem explicabo mollitia molestiae ipsum sequi provident dolore tempore. Amet omnis sed harum vitae reprehenderit non magni quo magnam beatae fuga ex natus quam id alias ducimus, impedit ipsam explicabo tempora fugit. Quas amet soluta consequuntur!`,
  };
  render(
    <BrowserRouter>
      <CensorForm data={data} />
    </BrowserRouter>
  );
  const input = await screen.getByPlaceholderText(
    'Enter Keyword(s) or phrase(s) to censor'
  );
  expect(input).toHaveFocus();
});

describe('Input value', () => {
  it('updates on change', () => {
    const data = {
      id: 1,
      title: "CIA's Blackops in Ukraine",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, ipsa! Accusamus, architecto minima dicta numquam ipsum  aspernatur deserunt perspiciatis quia, sint reprehenderit, asperiores ipsum repudiandae adipisci assumenda officia magnam hic laudantium. Ipsam, ullam. Magni, rerum voluptatem perferendis incidunt quaerat dicta recusandae delectus dolores. In exercitationem voluptatum quos atque. Aperiam est vitae possimus aliquid quisquam. Vero exercitationem ipsum tempora nihil saepe fugit aliquid omnis quam. Rem explicabo mollitia molestiae ipsum sequi provident dolore tempore. Amet omnis sed harum vitae reprehenderit non magni quo magnam beatae fuga ex natus quam id alias ducimus, impedit ipsam explicabo tempora fugit. Quas amet soluta consequuntur!`,
    };
    const changeHandler = jest.fn();

    render(
      <BrowserRouter>
        <CensorForm changeHandler={changeHandler} data={data} />
      </BrowserRouter>
    );

    const searchInput = screen.queryByPlaceholderText(
      'Enter Keyword(s) or phrase(s) to censor'
    );

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });
});
