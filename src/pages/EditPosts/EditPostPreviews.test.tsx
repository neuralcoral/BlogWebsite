import { render, screen, waitFor } from '@testing-library/react';
import EditPostPreviews from './EditPostPreviews';
import { fakePostMetadataEntries } from '../../test_utils/mock_data';
import { getDraftedPosts } from '../../api/posts';
import { PostMetadata } from '../../models/post';

jest.mock('../../api/posts', () => ({
  getDraftedPosts: jest.fn()
}));

jest.mock('./EditPostPreview', () => (props: { postMetadata: PostMetadata }) => {
  const MockEditPostPreview = () => <div>Mock EditPostPreview for post {props.postMetadata.id}</div>;
  MockEditPostPreview.displayName = `MockEditPostPreview${props.postMetadata.id}`;
  return MockEditPostPreview;
});

describe('EditPosts component', () => {
  test('initial state', async () => {
    (getDraftedPosts as jest.Mock).mockResolvedValue(fakePostMetadataEntries);
    render(<EditPostPreviews />);

    await waitFor(() => {
      fakePostMetadataEntries.forEach((postMetadata) => {
        expect(screen.getByText(`Mock EditPostPreview for post ${postMetadata.id}`)).toBeInTheDocument();
      });
    });
  });
  test('handles API errors gracefully', async () => {
    (getDraftedPosts as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<EditPostPreviews />);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to fetch posts: ', expect.any(Error));
    });

    consoleErrorSpy.mockRestore();
  });
});
