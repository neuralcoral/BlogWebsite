import PostEditor from './PostEditor';
import { fireEvent, render, screen } from '@testing-library/react';
import { fakePost } from '../../test_utils/mock_data';
import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';

jest.mock('./DraftPostContext');
describe('PostEditor  component', () => {
  const mockPostDispatch = jest.fn();

  beforeEach(() => {
    (usePost as jest.Mock).mockReturnValue(fakePost);
    (usePostDispatch as jest.Mock).mockReturnValue(mockPostDispatch);
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('initial state', () => {
    render(<PostEditor />);
    const editor = screen.getByRole('textbox');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveValue(fakePost.content);
  });

  test('updates post content on text change', () => {
    render(<PostEditor />);
    const editor = screen.getByRole('textbox');
    fireEvent.change(editor, { target: { value: 'Updated Text' } });

    expect(mockPostDispatch).toHaveBeenCalledWith({
      type: DraftPostActionType.CHANGE,
      newPost: {
        ...fakePost,
        content: 'Updated Text'
      },
      callback: expect.any(Function)
    });
  });
});
