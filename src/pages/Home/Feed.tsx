import { useEffect, useState } from 'react';
import { PostMetadata } from '../../models/post';
import { getPostedPosts } from '../../api/posts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Feed.css';

const BlogEntry: React.FC = () => {
  const [postMetadataEntries, setPostMetadataEntries] = useState<PostMetadata[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchPosts = async () => {
      try {
        const postedPostMetadataEntries = await getPostedPosts({ signal });
        setPostMetadataEntries(postedPostMetadataEntries);
        console.log(postedPostMetadataEntries);
      } catch (error) {
        console.error('Failed to fetch posts: ', error);
      }
    };
    fetchPosts();
    return () => {
      abortController.abort();
    };
  }, []);

  const handleClick = (postMetadata: PostMetadata) => {
    navigate(`/posts/${postMetadata.id}`);
  };

  return (
    <>
      {postMetadataEntries.map((postMetadata) => {
        return (
          <div key={postMetadata.id} onClick={() => handleClick(postMetadata)} className="post-preview">
            <h2 className="title">{postMetadata.title}</h2>
            <p>{postMetadata.previewText}</p>
          </div>
        );
      })}
    </>
  );
};

export default BlogEntry;
