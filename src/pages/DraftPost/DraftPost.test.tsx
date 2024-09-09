import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DraftPost from './DraftPost';
import { initializePost, buildReviewPostUrl } from '../../utils/postUtils';
import { createDraft } from '../../api/posts';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {}
  }),
  useParams: () => ({ id: 'new-uuid' }),
  useNavigate: jest.fn()
}));

jest.mock('../../utils/postUtils', () => ({
  initializePost: jest.fn(),
  buildReviewPostUrl: jest.fn()
}));

// Mock the createDraft API call
jest.mock('../../api/posts', () => ({
  createDraft: jest.fn()
}));

jest.mock('./TitleInput', () => ({ title, setTitle }: any) => (
  <div onClick={() => setTitle('New Title')}>Mocked TitleInput</div>
));

jest.mock('./PostViewToggle', () => () => <div>Mocked PostViewToggle</div>);
jest.mock('./SideButtons', () => () => <div>Mocked SideButtons</div>);
jest.mock('./BottomButtons', () => ({ handleSave, handleReview }: any) => (
  <div>
    <button onClick={handleSave}>Mocked Save</button>
    <button onClick={handleReview}>Mocked Review</button>
  </div>
));

describe('DraftPost component', () => {
  // Mock post object
  const mockPost = {
    metadata: {
      id: 'new-uuid',
      title: 'Initial Title',
      bodyUrl: 'url-to-body',
      previewText: 'Preview text',
      status: 'DRAFT',
      createdAt: new Date(),
      updatedAt: null,
      tags: []
    },
    content: 'Initial content'
  };

  // Setup before each test
  beforeEach(() => {
    (initializePost as jest.Mock).mockReturnValue(mockPost);
    (buildReviewPostUrl as jest.Mock).mockReturnValue('/review/new-uuid');
  });

  test('initial state', () => {
    render(
      <Router>
        <DraftPost />
      </Router>
    );

    // Ensure mocked components are rendered
    expect(screen.getByText(/Mocked TitleInput/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked PostViewToggle/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked SideButtons/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked Save/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked Review/i)).toBeInTheDocument();
  });

  test('calls initializePost when postToReview is undefined', () => {
    render(
      <Router>
        <DraftPost />
      </Router>
    );

    expect(initializePost).toHaveBeenCalledWith('new-uuid');
  });

  test('handles title change', () => {
    render(
      <Router>
        <DraftPost />
      </Router>
    );

    fireEvent.click(screen.getByText(/Mocked TitleInput/i));

    expect(initializePost).toHaveBeenCalledWith('new-uuid');
    expect(initializePost.mock.calls[0][0]).toBe('new-uuid');
  });

  test('calls createDraft when handleSave is triggered', () => {
    render(
      <Router>
        <DraftPost />
      </Router>
    );

    fireEvent.click(screen.getByText(/Mocked Save/i));

    expect(createDraft).toHaveBeenCalledWith(mockPost);
  });

  test('navigates to review post URL on handleReview', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    render(
      <Router>
        <DraftPost />
      </Router>
    );

    fireEvent.click(screen.getByText(/Mocked Review/i));

    expect(createDraft).toHaveBeenCalledWith(mockPost);

    expect(mockNavigate).toHaveBeenCalledWith('/review/new-uuid', { state: { post: mockPost } });
  });
});
