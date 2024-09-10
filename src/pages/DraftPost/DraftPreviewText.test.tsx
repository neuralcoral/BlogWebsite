import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import DraftPreviewText from './DraftPreviewText';

describe('DraftPreviewText component', () => {
    test('component is visible', () => {
        render(<DraftPreviewText previewText={'Hello world'} setPreviewText={jest.fn()} />);
        expect(screen.getByText(/Hello world/i)).toBeInTheDocument();
    });

    test('component is visible', () => {
        const mockSetPreviewText = jest.fn();
        render(<DraftPreviewText previewText={'Hello world'} setPreviewText={mockSetPreviewText} />);
        const textbox = screen.getByText(/Hello world/i);
        const newText = 'Goodbye Mars';
        fireEvent.change(textbox, {target: { value: newText } } ).valueOf();

        expect(mockSetPreviewText).toHaveBeenCalledWith(newText);
    });

} );