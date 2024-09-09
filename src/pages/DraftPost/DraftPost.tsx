import './DraftPost.css';
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { buildReviewPostUrl, initializePost } from '../../utils/postUtils';
import TitleInput from './TitleInput';
import SideButtons from './SideButtons';
import BottomButtons from './BottomButtons';
import PostViewToggle from './PostViewToggle';
import { createDraft } from '../../api/posts';
import { useNavigate } from 'react-router-dom';

const DraftPost: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const postToReview = location.state?.post;
  const [post, setPost] = useState(postToReview ?? initializePost(id));

  const [isEditing, setIsEditing] = useState(true);

  const navigate = useNavigate();

  const setTitle = (title: string) => {
    setPost({
      ...post,
      postMetadata: {
        ...post.postMetadata,
        title: title
      }
    });
  }

  const handleSave = () => {
    createDraft(post);
  };

  const handleReview = () => {
    createDraft(post);
    navigate(buildReviewPostUrl(post.metadata.id), { state: { post: post } });
  };

  return (
    <div className="draft">
      <TitleInput title={post.metadata.title} setTitle={setTitle} />
      <PostViewToggle post={post} setPost={setPost} isEditing={isEditing} />
      <SideButtons isEditing={isEditing} setIsEditing={setIsEditing} />
      <BottomButtons handleSave={handleSave} handleReview={handleReview} />
    </div>
  );
};

export default DraftPost;
