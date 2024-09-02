import PostPreview from "../DraftPost/PostPreview";
import './ReviewPost.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { buildDraftPostUrl,  } from "../../utils/postUtils";
import { submitPost, getPost } from "../../api/posts";

const ReviewPost: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  let post = location.state?.post; // Access the passed post
  const { id } = useParams<{ id: string }>(); 
  if(!id) {
    throw new Error('Post ID cannot be null');
  }
  if (!post) {
    post = getPost(id);
  }

  return (
    <div className="review-post">
      <div className="review-title">
        <h1>{post.title}</h1>
      </div>
      <div className="review-text">
        <PostPreview post={post}/> 
      </div>
      <div className="review-buttons">
        <button onClick={() => {navigate(buildDraftPostUrl(post.id), {state: {post: post}})}}>Edit</button>
        <button onClick={() => {submitPost(post)}}>Submit</button>
      </div>
    </div>
  );
}

export default ReviewPost;