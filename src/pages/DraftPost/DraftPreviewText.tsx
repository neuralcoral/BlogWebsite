import { ChangeEvent } from 'react';
import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';
import './DraftPost.css';
import React from 'react';

interface DraftPreviewTextProps {
  isEditing: boolean;
}

const DraftPreviewText: React.FC<DraftPreviewTextProps> = ({ isEditing }) => {
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
      {isEditing ? (
        <textarea value={post?.metadata.previewText} onChange={handleChange} />
      ) : (
        <h3>{post?.metadata.previewText}</h3>
      )}
    </div>
  );
};

export default DraftPreviewText;
