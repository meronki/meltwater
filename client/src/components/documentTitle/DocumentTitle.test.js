import { render, screen } from '@testing-library/react';
import { DocumentTitle } from './DocumentTitle';

test('List of titles', async () => {
  const data = {
    id: 1,
    title: "CIA's Blackops in Ukraine",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, ipsa! Accusamus, architecto minima dicta numquam ipsum  aspernatur deserunt perspiciatis quia, sint reprehenderit, asperiores ipsum repudiandae adipisci assumenda officia magnam hic laudantium. Ipsam, ullam. Magni, rerum voluptatem perferendis incidunt quaerat dicta recusandae delectus dolores. In exercitationem voluptatum quos atque. Aperiam est vitae possimus aliquid quisquam. Vero exercitationem ipsum tempora nihil saepe fugit aliquid omnis quam. Rem explicabo mollitia molestiae ipsum sequi provident dolore tempore. Amet omnis sed harum vitae reprehenderit non magni quo magnam beatae fuga ex natus quam id alias ducimus, impedit ipsam explicabo tempora fugit. Quas amet soluta consequuntur!`,
  };
  render(<DocumentTitle data={data} />);
  const title = await screen.findByRole('button');
  expect(title).toBeInTheDocument();
});
