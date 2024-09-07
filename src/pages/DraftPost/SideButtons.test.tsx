import { fireEvent, render, screen } from "@testing-library/react";
import SideButtons from "./SideButtons";

jest.mock('react-icons/vsc', () => ({
    ...jest.requireActual('react-icons/vsc'),
    VscOpenPreview:() => <div>Mock Preview Button</div>
}));

jest.mock('react-icons/fa', () => ({
  ...jest.requireActual('react-icons/fa'),
  FaEdit: () => <div>Mock Edit Button</div>
}));

describe('SideButtons component', () => {

  const mockIsEditing = true;
  const mockSetIsEditing = jest.fn((isEditing) => !isEditing);

  test('edit state', () => {
    render(
      <SideButtons isEditing={true} setIsEditing={mockSetIsEditing}/>
    )
    const previewButton = screen.getByText(/Mock Preview Button/i)
    expect(previewButton).toBeInTheDocument();
  });

  test('preview state', () => {
    render(
      <SideButtons isEditing={false} setIsEditing={mockSetIsEditing}/>
    )
    expect(screen.getByText(/Mock Edit Button/i)).toBeInTheDocument();
  });

  test('toggle states', () => {
    const { rerender } = render(
      <SideButtons isEditing={true} setIsEditing={mockSetIsEditing}/>
    )
    const previewButton = screen.getByText(/Mock Preview Button/i)
    expect(previewButton).toBeInTheDocument();
    expect(screen.queryByText(/Mock Edit Button/i)).not.toBeInTheDocument();
    
    fireEvent.click(previewButton);
    rerender(<SideButtons isEditing={false} setIsEditing={mockSetIsEditing} />)

    const editButton = screen.getByText(/Mock Edit Button/i)
    expect(editButton).toBeInTheDocument();
    expect(screen.queryByText(/Mock Preview Button/i)).not.toBeInTheDocument();

    fireEvent.click(editButton);
    rerender(<SideButtons isEditing={true} setIsEditing={mockSetIsEditing} />)
    expect(screen.getByText(/Mock Preview Button/i)).toBeInTheDocument();
    expect(screen.queryByText(/Mock Edit Button/i)).not.toBeInTheDocument();
  })
})