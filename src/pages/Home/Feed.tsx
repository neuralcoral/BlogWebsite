import { useEffect, useState } from 'react';
import { PostMetadata } from '../../models/post';
import { getPostedPosts } from '../../api/posts';

const BlogEntry: React.FC = () => {
  const [postMetadataEntries, setPostMetadataEntries] = useState<PostMetadata[]>([]);

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

  return (
    <>
      {postMetadataEntries.map((postMetadata) => {
        return (
          <div key={postMetadata.id} className="post-preview">
            <h2>{postMetadata.title}</h2>
            <p>{postMetadata.previewText}</p>
          </div>
        );
      })}
    </>
  );
};

export default BlogEntry;
