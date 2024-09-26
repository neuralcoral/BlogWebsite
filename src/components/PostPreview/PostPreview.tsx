import { PostMetadata } from '../../models/post';
import React from 'react';

interface PostPreviewProps {
  post: PostMetadata;
}
const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <div className="post-preview">
      <h2>{post.title}</h2>
      <p>{post.previewText}</p>
    </div>
  );
};

export default PostPreview;
