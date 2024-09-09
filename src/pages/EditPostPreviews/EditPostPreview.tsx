import React from 'react';
import { PostMetadata } from '../../models/post';

interface EditPostPreviewProps {
  postMetadata: PostMetadata;
}
const EditPostPreview: React.FC<EditPostPreviewProps> = ({ postMetadata }) => {
  return (
    <div 
    key={postMetadata.id} 
    className="post-preview"
    >
      <h2>{ postMetadata.title }</h2>
      <p>{ postMetadata.previewText }</p>
    </div>
  );
};

export default EditPostPreview;
