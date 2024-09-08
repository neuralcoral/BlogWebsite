import { fireEvent, render, screen } from '@testing-library/react';
import BottomButtons from './BottomButtons';
import { BrowserRouter as Router } from 'react-router-dom';
import { createDraft } from '../../api/posts';
import { buildReviewPostUrl } from '../../utils/postUtils';
import { fakePostMetadata } from '../../test_utils/mock_data';

const mockNavigate = jest.fn();
jest.mock('../../api/posts');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));
describe('BottomButtons componenet', () => {

  test('displays buttons', () => {
    render(
      <Router>
        <BottomButtons post={fakePostMetadata} />
      </Router>
    );

    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByText(/Review/i)).toBeInTheDocument();
  });

  test('clicking on Save saves draft', () => {
    render(
      <Router>
        <BottomButtons post={fakePostMetadata} />
      </Router>
    );

    const button = screen.getByText(/Save/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(createDraft).toHaveBeenCalledWith(fakePostMetadata);
  });

  test('clicking on Review saves and navigates', () => {
    render(
      <Router>
        <BottomButtons post={fakePostMetadata} />
      </Router>
    );

    const button = screen.getByText(/Review/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(createDraft).toHaveBeenCalledWith(fakePostMetadata);
    expect(mockNavigate).toHaveBeenCalledWith(buildReviewPostUrl(fakePostMetadata.id), { state: { post: fakePostMetadata } });
  });
});
