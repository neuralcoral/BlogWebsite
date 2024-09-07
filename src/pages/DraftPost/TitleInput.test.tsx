import { fireEvent, render, screen } from "@testing-library/react"
import TitleInput from "./TitleInput"
import { initialPost } from "../../test_utils/mock_data"

describe('TestInput component', () => {
  test('initial state', () => {
    const mockSetPost = jest.fn()
    render(<TitleInput post={initialPost} setPost={mockSetPost}/>)
    
    expect(screen.getByRole('textbox')).toHaveValue(initialPost.title);
  });

  test('changing text calls setPost', () => {
    const mockSetPost = jest.fn()
    render(<TitleInput post={initialPost} setPost={mockSetPost}/>)
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(initialPost.title);
    
    fireEvent.change(input, {
      target: { value: 'Unit Test'}
    });

    expect(mockSetPost).toHaveBeenCalledWith({
      ...initialPost,
      title: 'Unit Test'
    });
    
  });

})