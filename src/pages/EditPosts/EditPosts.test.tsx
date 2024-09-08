import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import EditPosts from './EditPosts';
import { fakePosts } from '../../test_utils/mock_data';
import { getDraftedPosts } from '../../api/posts';
import Post from '../../models/post';

jest.mock('../../api/posts', () => ({
  getDraftedPosts: jest.fn()
}));

jest.mock('./EditPost', () => (props: { post: Post }) => {
  const MockEditPost = () => <div>Mock EditPost for post {props.post.id}</div>;
  MockEditPost.displayName = `MockEditPost${props.post.id}`;
  return MockEditPost;
});

describe('EditPosts component', () => {
  test('initial state', async () => {
    (getDraftedPosts as jest.Mock).mockResolvedValue(fakePosts);
    render(<EditPosts />);

    await waitFor(() => {
      fakePosts.forEach((post) => {
        expect(screen.getByText(`Mock EditPost for post ${post.id}`)).toBeInTheDocument();
      });
    });
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
