import PostEditor from './PostEditor';
import { fireEvent, render, screen } from '@testing-library/react';
import { fakePost } from '../../test_utils/mock_data';

describe('PostEditor  component', () => {
  test('initial state', () => {
    render(<PostEditor post={fakePost} setPost={jest.fn()} />);
    const editor = screen.getByRole('textbox');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveValue(fakePost.content);
  });

  test('updates post body on text change', () => {
    const setPostMock = jest.fn();
    render(<PostEditor post={fakePost} setPost={setPostMock} />);
    const editor = screen.getByRole('textbox');
    fireEvent.change(editor, { target: { value: 'Updated Text' } });

    expect(setPostMock).toHaveBeenCalledWith({
      ...fakePost,
      body: 'Updated Text'
    });
  });
});
