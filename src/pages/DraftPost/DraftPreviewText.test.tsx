import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import DraftPreviewText from './DraftPreviewText';
import { fakePost } from "../../test_utils/mock_data";
import { DraftPostActionType, usePost, usePostDispatch } from "./DraftPostContext";

jest.mock('./DraftPostContext');

describe('DraftPreviewText component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (usePost as jest.Mock).mockReturnValue(fakePost);
        (usePostDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('component is visible', () => {
        render(<DraftPreviewText />);
        expect(screen.getByText(fakePost.metadata.previewText)).toBeInTheDocument();
    });

    test('text is updated in component', () => {
        render(<DraftPreviewText />);
        const textbox = screen.getByText(fakePost.metadata.previewText);
        const newText = 'Goodbye Mars';

        fireEvent.change(textbox, {target: { value: newText } } ).valueOf();

        expect(mockDispatch).toHaveBeenCalledWith({
            type: DraftPostActionType.CHANGE,
            newPost: {
                ...fakePost,
                metadata: {
                    ...fakePost.metadata,
                    previewText: newText
                }
            },
            callback: expect.any(Function) 
        });
    });
});