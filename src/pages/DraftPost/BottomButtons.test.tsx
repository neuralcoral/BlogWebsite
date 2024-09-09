import { fireEvent, render, screen } from '@testing-library/react';
import BottomButtons from './BottomButtons';

describe('BottomButtons componenet', () => {

  test('displays buttons', () => {
    render(<BottomButtons handleReview={jest.fn()} handleSave={jest.fn()} /> );

    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByText(/Review/i)).toBeInTheDocument();
  });

  test('clicking on Save triggers save', () => {
    const mockHandleSave = jest.fn();
    render(<BottomButtons handleReview={jest.fn()} handleSave={mockHandleSave} /> );

    const button = screen.getByText(/Save/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(mockHandleSave).toHaveBeenCalled();
  });

  test('clicking on Review triggers review', () => {
    const mockHandleReview = jest.fn();
    render(<BottomButtons handleReview={mockHandleReview} handleSave={jest.fn()} /> );

    const button = screen.getByText(/Review/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(mockHandleReview).toHaveBeenCalled();
  });
});
