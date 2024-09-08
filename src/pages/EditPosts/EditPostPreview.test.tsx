import { render, screen } from '@testing-library/react';
import EditPostPreview from './EditPostPreview';
import { fakePostMetadata } from '../../test_utils/mock_data';

describe('EditPost component', () => {
  test('Shows title and preview', () => {
    render(<EditPostPreview postMetadata={fakePostMetadata} />);

    expect(screen.getByText(fakePostMetadata.title)).toBeInTheDocument();
    expect(screen.getByText(fakePostMetadata.previewText)).toBeInTheDocument();
  });
});
