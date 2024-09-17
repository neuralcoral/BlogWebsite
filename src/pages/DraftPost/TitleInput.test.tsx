import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TitleInput from './TitleInput';
import { fakePost } from '../../test_utils/mock_data';
import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';

jest.mock('./DraftPostContext', () => ({
  usePost: jest.fn(),
  usePostDispatch: jest.fn()
}));

describe('TestInput component', () => {
  const initialPost = fakePost;
  const mockDispatch = jest.fn();
  beforeEach(() => {
    (usePost as jest.Mock).mockReturnValue(initialPost);
    (usePostDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });
  test('initial state', () => {
    render(<TitleInput isEditing={true} />);

    expect(screen.getByRole('textbox')).toHaveValue(initialPost.metadata.title);
  });

  test('changing text calls setPost', () => {
    render(<TitleInput isEditing={true} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(initialPost.metadata.title);

    fireEvent.change(input, { target: { value: 'Unit Test' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: DraftPostActionType.CHANGE,
      newPost: {
        ...initialPost,
        metadata: {
          ...initialPost.metadata,
          title: 'Unit Test'
        }
      },
      callback: expect.any(Function)
    });
  });
});
