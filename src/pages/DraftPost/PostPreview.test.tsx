import { render, screen } from "@testing-library/react"
import { initialPost } from "../../test_utils/mock_data"
import PostPreview from "./PostPreview"


describe('PostPreview component', () => {
  test('initial state', () => {
    render(
      <PostPreview post={ initialPost } />
    )
    const expectedText = screen.getByText(initialPost.body);
    expect(expectedText).toBeInTheDocument();
  })
})