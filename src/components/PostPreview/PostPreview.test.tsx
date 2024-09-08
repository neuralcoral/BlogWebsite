import {render, screen} from '@testing-library/react';
import { fakePostMetadata } from '../../test_utils/mock_data';
import PostPreview from './PostPreview';

describe('PostPreview component', () => {
  test('Shows all items', () => {
    render(<PostPreview post={fakePostMetadata} />);
    
    expect(screen.getByText(fakePostMetadata.title)).toBeInTheDocument();
    expect(screen.getByText(fakePostMetadata.previewText)).toBeInTheDocument();
  });
})