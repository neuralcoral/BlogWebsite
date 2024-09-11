import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TitleInput from './TitleInput';
import { fakePost, fakePostMetadata } from '../../test_utils/mock_data';
import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';

jest.mock('./DraftPostContext');
describe('TestInput component', () => {

  const mockPostDispatch = jest.fn();

  beforeEach(() => {
    (usePost as jest.Mock).mockReturnValue(fakePost);
    (usePostDispatch as jest.Mock).mockReturnValue(mockPostDispatch);
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('initial state', () => {
    render(<TitleInput />);

    expect(screen.getByRole('textbox')).toHaveValue(fakePost.metadata.title);
  });

  test('changing text calls setPost', () => {
    render(<TitleInput />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(fakePostMetadata.title);

    fireEvent.change(input, {
      target: { value: 'Unit Test' }
    });

    expect(mockPostDispatch).toHaveBeenCalledWith({
      type: DraftPostActionType.CHANGE,
      newPost: {
        ...fakePost,
        metadata: {
          ...fakePost.metadata,
          title: 'Unit Test'
        }
      },
      callback: expect.any(Function)
    });
  });
});
