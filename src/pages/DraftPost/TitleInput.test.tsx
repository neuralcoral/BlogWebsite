import { fireEvent, render, screen } from "@testing-library/react"
import TitleInput from "./TitleInput"
import { fakePost } from "../../test_utils/mock_data"

describe('TestInput component', () => {
  test('initial state', () => {
    const mockSetPost = jest.fn()
    render(<TitleInput post={fakePost} setPost={mockSetPost}/>)
    
    expect(screen.getByRole('textbox')).toHaveValue(fakePost.title);
  });

  test('changing text calls setPost', () => {
    const mockSetPost = jest.fn()
    render(<TitleInput post={fakePost} setPost={mockSetPost}/>)
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(fakePost.title);
    
    fireEvent.change(input, {
      target: { value: 'Unit Test'}
    });

    expect(mockSetPost).toHaveBeenCalledWith({
      ...fakePost,
      title: 'Unit Test'
    });
    
  });

})