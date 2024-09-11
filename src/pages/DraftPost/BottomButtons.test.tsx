import { fireEvent, render, screen } from '@testing-library/react';
import BottomButtons from './BottomButtons';
import { BrowserRouter as Router } from 'react-router-dom';
import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';
import { fakePost } from '../../test_utils/mock_data';

jest.mock('./DraftPostContext');
describe('BottomButtons componenet', () => {
  beforeEach(() => {
    (usePost as jest.Mock).mockReturnValue(fakePost);
  });

  test('displays buttons', () => {
    render(
      <Router>
        <BottomButtons />
      </Router>
    );

    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByText(/Review/i)).toBeInTheDocument();
  });

  test('clicking on Save triggers save', () => {
    const mockPostDispatch = jest.fn();
    (usePostDispatch as jest.Mock).mockReturnValue(mockPostDispatch);

    render(
      <Router>
        <BottomButtons />
      </Router>
    );

    const button = screen.getByText(/Save/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(mockPostDispatch).toHaveBeenCalledWith({
      type: DraftPostActionType.SAVE,
      newPost: fakePost,
      callback: expect.any(Function)
    });
  });

  test('clicking on Review triggers review', () => {
    const mockPostDispatch = jest.fn();
    (usePostDispatch as jest.Mock).mockReturnValue(mockPostDispatch);

    render(
      <Router>
        <BottomButtons />
      </Router>
    );

    const button = screen.getByText(/Review/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(mockPostDispatch).toHaveBeenCalledWith({
      type: DraftPostActionType.REVIEW,
      newPost: fakePost,
      callback: expect.any(Function)
    });
  });
});
