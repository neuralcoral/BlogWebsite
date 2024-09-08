import React from 'react';
import ReactMarkdown from 'react-markdown';
import Post from '../../models/post';

export interface PostPreviewProps {
  post: Post;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }: PostPreviewProps) => {
  return (
    <>
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </>
  );
};

export default PostPreview;
