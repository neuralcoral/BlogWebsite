import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TitleInput from './TitleInput';
import { fakePostMetadata } from '../../test_utils/mock_data';

describe('TestInput component', () => {
  test('initial state', () => {
    const mockSetTitle = jest.fn();
    render(<TitleInput title={fakePostMetadata.title} setTitle={mockSetTitle} />);

    expect(screen.getByRole('textbox')).toHaveValue(fakePostMetadata.title);
  });

  test('changing text calls setPost', () => {
    const mockSetTitle = jest.fn();
    render(<TitleInput title={fakePostMetadata.title} setTitle={mockSetTitle} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(fakePostMetadata.title);

    fireEvent.change(input, {
      target: { value: 'Unit Test' }
    });

    expect(mockSetTitle).toHaveBeenCalledWith('Unit Test');
  });
});
