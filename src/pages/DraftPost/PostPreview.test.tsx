import { render, screen } from '@testing-library/react';
import { fakePost } from '../../test_utils/mock_data';
import { usePost } from './DraftPostContext';
import PostPreview from './PostPreview';

jest.mock('./DraftPostContext');
describe('PostPreview component', () => {

  beforeEach(() => {
    (usePost as jest.Mock).mockReturnValue(fakePost);
  })

  test('initial state', () => {
    render(<PostPreview />);
    const expectedText = screen.getByText(fakePost.content);
    expect(expectedText).toBeInTheDocument();
  });
});
