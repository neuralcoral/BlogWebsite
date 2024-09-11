import { render, screen } from '@testing-library/react';
import PostViewToggle from './PostViewToggle';

jest.mock('./PostEditor', () => () => <div>Mock PostEditor</div>);
jest.mock('./PostPreview', () => () => <div>Mock PostPreview</div>);

describe('PostViewToggle tests', () => {
  test('initial state', () => {
    render(<PostViewToggle isEditing={true} />);
    expect(screen.getByText(/Mock PostEditor/i)).toBeInTheDocument();
  });

  test('preview works', () => {
    render(<PostViewToggle isEditing={false} />);
    expect(screen.getByText(/Mock PostPreview/i)).toBeInTheDocument();
  });
});
