import './DraftPost.css';
import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';
import React from 'react';

interface TitleInputProps {
  isEditing: boolean;
}
const TitleInput: React.FC<TitleInputProps> = ({ isEditing }) => {
  const post = usePost();
  const dispatch = usePostDispatch();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
          ...post.metadata,
          title: e.target.value
        }
      },
      callback: () => {}
    });
  };
  return (
    <div className="draft-title">
      {isEditing ? <input onChange={handleChange} value={post?.metadata.title} /> : <h1>{post?.metadata.title}</h1>}
    </div>
  );
};

export default TitleInput;
