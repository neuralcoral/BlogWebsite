import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import DraftPost from "./DraftPost";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {}
  }),
  useParams: () => ({id: 'new-uuid'}),
}));

jest.mock('../../utils/postUtils', () => ({
  initializePost: jest.fn()
}));
jest.mock('./TitleInput', () => () => <div>Mocked TitleInput</div>);
jest.mock('./PostViewToggle', () => () => <div>Mocked PostViewToggle</div>);
jest.mock('./SideButtons', () => () => <div>Mocked SideButtons</div>);
jest.mock('./BottomButtons', () => () => <div>Mocked BottomButtons</div>);

describe('DraftPost component', () => {

  test('initial state', () => {
    render(
      <Router>
        <DraftPost />
      </Router>
    )

    expect(screen.getByText(/Mocked TitleInput/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked PostViewToggle/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked SideButtons/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked BottomButtons/i)).toBeInTheDocument();

  });

  test('calls initializePost when postToReview is undefiend', () => {
    const { initializePost } = require('../../utils/postUtils');
    render(
      <Router>
        <DraftPost />
      </Router>
    );
    expect(initializePost).toHaveBeenCalledWith('new-uuid');
  }) 
});