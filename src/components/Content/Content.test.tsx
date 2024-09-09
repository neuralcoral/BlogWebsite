import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

jest.mock('../../pages/Home/Home', () => () => <div>Mocked Home</div>);
jest.mock('../../pages/Login/Login', () => () => <div>Mocked Login</div>);
jest.mock('../../pages/DraftPost/DraftPost', () => () => <div>Mocked DraftPost</div>);
jest.mock('../../pages/ReviewPost/ReviewPost', () => () => <div>Mocked ReviewPost</div>);
jest.mock('../../pages/EditPostPreviews/EditPostPreviews', () => () => <div>Mocked EditPostPreviews</div>);

describe('Content Component', () => {
  test('renders Home page on default route', () => {
    renderWithRouter(<Content />);
    expect(screen.getByText(/Mocked Home/i)).toBeInTheDocument();
  });

  test('renders Login page on /login route', () => {
    window.history.pushState({}, 'Login page', '/login');
    renderWithRouter(<Content />);
    expect(screen.getByText(/Mocked Login/i)).toBeInTheDocument();
  });

  test('renders DraftPost page on /posts/:id/draft route', () => {
    window.history.pushState({}, 'Draft Post page', '/posts/123/draft');
    renderWithRouter(<Content />);
    expect(screen.getByText(/Mocked DraftPost/i)).toBeInTheDocument();
  });

  test('renders ReviewPost page on /posts/:id/review route', () => {
    window.history.pushState({}, 'Review Post page', '/posts/123/review');
    renderWithRouter(<Content />);
    expect(screen.getByText(/Mocked ReviewPost/i)).toBeInTheDocument();
  });

  test('renders EditPostPreviews page on /posts/edit route', () => {
    window.history.pushState({}, 'Edit Posts page', '/posts/edit');
    renderWithRouter(<Content />);
    expect(screen.getByText(/Mocked EditPostPreviews/i)).toBeInTheDocument();
  });
});
