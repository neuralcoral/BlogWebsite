import PostEditor from './PostEditor';
import PostPreview from './PostPreview';
import './DraftPost.css';
import React from 'react';

interface PostViewToggleProps {
  isEditing: boolean;
}

const PostViewToggle: React.FC<PostViewToggleProps> = ({ isEditing }) => {
  return <div className="draft-text">{isEditing ? <PostEditor /> : <PostPreview />}</div>;
};

export default PostViewToggle;
