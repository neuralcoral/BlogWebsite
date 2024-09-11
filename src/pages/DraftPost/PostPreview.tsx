import React from 'react';
import ReactMarkdown from 'react-markdown';
import { usePost } from './DraftPostContext';

export interface PostPreviewProps {}
const PostPreview: React.FC<PostPreviewProps> = () => {
  const post = usePost();
  return (
    <>
      <ReactMarkdown>{post?.content}</ReactMarkdown>
    </>
  );
};

export default PostPreview;
