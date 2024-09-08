import { render, screen, fireEvent } from "@testing-library/react";
import PostViewToggle from "./PostViewToggle";
import { fakePost } from "../../test_utils/mock_data";

jest.mock('./PostEditor', () => () => <div>Mock PostEditor</div>);
jest.mock('./PostPreview', () => () => <div>Mock PostPreview</div>);

describe('PostViewToggle tests', () => {
  test('initial state', () => {
    const mockSetPost = jest.fn();
    render(
      <PostViewToggle post={fakePost} setPost={mockSetPost} isEditing={true}/>
    )
    expect(screen.getByText(/Mock PostEditor/i)).toBeInTheDocument();
  });

  test('preview works', () => {
    const mockSetPost = jest.fn();
    render(
      <PostViewToggle post={fakePost} setPost={mockSetPost} isEditing={false}/>
    )
    expect(screen.getByText(/Mock PostPreview/i)).toBeInTheDocument();
  });

});