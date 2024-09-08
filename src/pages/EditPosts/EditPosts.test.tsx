import { render, screen, waitFor } from "@testing-library/react"
import EditPost from "./EditPost"
import EditPosts from "./EditPosts"
import { fakePosts } from "../../test_utils/mock_data"
import { getDraftedPosts } from "../../api/posts"

jest.mock('../../api/posts', () => ({
  getDraftedPosts: jest.fn(),
}));

jest.mock('./EditPost', () => (props: any) => (
  <div>Mock EditPost for post {props.post.id}</div>
));

describe('EditPosts component', () => {
  test('initial state', async () => {
    (getDraftedPosts as jest.Mock).mockResolvedValue(fakePosts);
    render( <EditPosts /> );

    await waitFor(() => {
      fakePosts.forEach(post => {
        expect(screen.getByText(`Mock EditPost for post ${post.id}`)).toBeInTheDocument();
      })
    })
  });
  test('handles API errors gracefully', async () => {
    (getDraftedPosts as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<EditPosts />);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to fetch posts: ', expect.any(Error));
    });

    consoleErrorSpy.mockRestore();
  });
});