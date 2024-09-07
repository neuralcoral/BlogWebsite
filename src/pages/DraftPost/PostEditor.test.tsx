import PostEditor from "./PostEditor";
import { fireEvent, render, screen } from '@testing-library/react';
import Post, { Status } from '../../models/post';

describe('PostEditor  component', () => { 
  const post: Post = {
    id: 'some-uuid',
    title: 'Title',
    body: 'Body Text',
    status: Status.Draft,
    createdAt: new Date(Date.now().toLocaleString()),
    updatedAt: null
  }

  test('initial state', () => {
    render(
      <PostEditor post={post} setPost={jest.fn()}/>
    )
    const editor = screen.getByRole('textbox');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveValue(post.body);
  });

  test('updates post body on text change', () => {
    const setPostMock = jest.fn();
    render(
      <PostEditor post={post} setPost={setPostMock}/>
    )
    const editor = screen.getByRole('textbox');
    fireEvent.change(editor, { target: { value: 'Updated Text' } });

    expect(setPostMock).toHaveBeenCalledWith({
      ...post,
      body: 'Updated Text'
    });
  });
});