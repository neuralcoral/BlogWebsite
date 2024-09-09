import React from 'react';
import { useEffect, useState } from 'react';
import { getDraftedPosts } from '../../api/posts';
import { PostMetadata } from '../../models/post';
import EditPostPreview from './EditPostPreview';

const EditPostPreviews: React.FC = () => {
  const [postMetadataEntries, setPostMetadataEntries] = useState<PostMetadata[]>([]);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchPosts = async () => {
      try {
        const draftedPostMetadataEntries = await getDraftedPosts({ signal });
        setPostMetadataEntries(draftedPostMetadataEntries);
      } catch (error) {
        console.error('Failed to fetch posts: ', error);
      }
    };
    fetchPosts();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      {postMetadataEntries.map((postMetadata) => <EditPostPreview key={postMetadata.id} postMetadata={postMetadata} /> )}
    </>
  );
};

export default EditPostPreviews;
