import PostEditor from "./PostEditor";
import { fireEvent, render, screen } from '@testing-library/react';
import { initialPost } from "../../test_utils/mock_data";

describe('PostEditor  component', () => { 

  test('initial state', () => {
    render(
      <PostEditor post={initialPost} setPost={jest.fn()}/>
    )
    const editor = screen.getByRole('textbox');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveValue(initialPost.body);
  });

  test('updates post body on text change', () => {
    const setPostMock = jest.fn();
    render(
      <PostEditor post={initialPost} setPost={setPostMock}/>
    )
    const editor = screen.getByRole('textbox');
    fireEvent.change(editor, { target: { value: 'Updated Text' } });

    expect(setPostMock).toHaveBeenCalledWith({
      ...initialPost,
      body: 'Updated Text'
    });
  });
});