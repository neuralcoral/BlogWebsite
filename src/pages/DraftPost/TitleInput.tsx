import React from 'react';
import Post from '../../models/post';
import './DraftPost.css';

const TitleInput: React.FC<{ post: Post; setPost: (post: Post) => void }> = ({ post, setPost }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPost({
      ...post,
      title: e.target.value
    });
  };
  return (
    <div className="draft-title">
      <input onChange={handleChange} value={post.title} />
    </div>
  );
};

export default TitleInput;
