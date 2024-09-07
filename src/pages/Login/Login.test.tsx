import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form correctly', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Username/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('updates username and password on input change', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const usernameInput = screen.getByDisplayValue(/Username/i);
    const passwordInput = screen.getByDisplayValue(/Password/i);

    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPass' } });

    expect((usernameInput as HTMLInputElement).value).toBe('testUser');
    expect((passwordInput as HTMLInputElement).value).toBe('testPass');
  });

  test('navigates to /createPost on correct login', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const button = screen.getByText(/Login/i);

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/createPost');
  });

  test('does not navigate on incorrect login', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const usernameInput = screen.getByDisplayValue(/Username/i);
    const passwordInput = screen.getByDisplayValue(/Password/i);
    const button = screen.getByText(/Login/i);

    fireEvent.change(usernameInput, { target: { value: 'wrongUser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongPass' } });
    fireEvent.click(button);

    // Check that navigate was not called
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
