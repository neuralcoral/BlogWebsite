import React from 'react';
import Post from '../../models/post';

interface EditPostProps {
  post: Post;
  previewLength?: number;
}
const EditPost: React.FC<EditPostProps> = ({ post, previewLength }) => {
  const postLength = previewLength ?? 100;
  return (
    <div key={post.id} className="post-preview">
      <h2>{post.title}</h2>
      <p>{post.body.length > postLength ? post.body.substring(0, postLength) + '...' : post.body}</p>
    </div>
  );
};

export default EditPost;
