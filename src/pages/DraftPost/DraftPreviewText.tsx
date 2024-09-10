import { ChangeEvent } from "react";
import { Post } from "../../models/post";
import { DraftPostAction, DraftPostActionType } from "./DraftPost";

interface DraftPreviewTextProps {
    post: Post;
    dispatch: React.Dispatch<DraftPostAction>;
} 
const DraftPreviewText: React.FC<DraftPreviewTextProps> = ({ post, dispatch }) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type: DraftPostActionType.CHANGE,
            newPost: {
                ...post,
                metadata: {
                    ...post.metadata,
                    previewText: e.target.value
                }
            }
        });
    }
    return (
        <div
            className="preview-text"
        >
            <textarea
                value={ post.metadata.previewText }
                onChange={handleChange}
            />
        </div>
    );
}

export default DraftPreviewText;