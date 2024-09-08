import { render, screen } from '@testing-library/react';
import { fakePostMetadata } from '../../test_utils/mock_data';
import PostPreview from './PostPreview';

describe('PostPreview component', () => {
  test('initial state', () => {
    render(<PostPreview post={fakePostMetadata} />);
    const expectedText = screen.getByText(fakePostMetadata.body);
    expect(expectedText).toBeInTheDocument();
  });
});
