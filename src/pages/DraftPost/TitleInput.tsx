import React from 'react';
import { Post } from '../../models/post';
import { DraftPostAction, DraftPostActionType } from './DraftPost';
import './DraftPost.css';

interface TitleInputProps {
  post: Post;
  dispatch: React.Dispatch<DraftPostAction>;
}

const TitleInput: React.FC<TitleInputProps> = ({ post, dispatch }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
      <input onChange={handleChange} value={post.metadata.title} />
    </div>
  );
};

export default TitleInput;
