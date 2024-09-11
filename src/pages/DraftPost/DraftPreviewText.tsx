import { ChangeEvent } from 'react';
import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';

interface DraftPreviewTextProps {}
const DraftPreviewText: React.FC<DraftPreviewTextProps> = () => {
  const post = usePost();
  const dispatch = usePostDispatch();
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!dispatch) {
      throw new Error('dispatch must be used within a Provider');
    }
    if (!post) {
      throw new Error('post must be initialized');
    }
    dispatch({
      type: DraftPostActionType.CHANGE,
      newPost: {
        ...post,
        metadata: {
          ...post?.metadata,
          previewText: e.target.value
        }
      },
      callback: () => {}
    });
  };
  return (
    <div className="preview-text">
      <textarea value={post?.metadata.previewText} onChange={handleChange} />
    </div>
  );
};

export default DraftPreviewText;
