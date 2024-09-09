import { render, screen } from '@testing-library/react';
import { fakePost } from '../../test_utils/mock_data';
import PostPreview from './PostPreview';

describe('PostPreview component', () => {
  test('initial state', () => {
    render(<PostPreview post={fakePost} />);
    const expectedText = screen.getByText(fakePost.content);
    expect(expectedText).toBeInTheDocument();
  });
});
