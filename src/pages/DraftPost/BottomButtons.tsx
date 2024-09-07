import './DraftPost.css';
import Post from '../../models/post';
import { createDraft } from '../../api/posts';
import { useNavigate } from 'react-router-dom';
import { buildReviewPostUrl } from '../../utils/postUtils';

interface BottomButtonsProps {
  post: Post
}
const BottomButtons: React.FC<BottomButtonsProps> = ({ post }) => {
    const navigate = useNavigate();
    const handleReview = (post: Post) => {
        createDraft(post);
        navigate(buildReviewPostUrl(post.id), {state: { post: post }});
    };
    return (
      <div className='bottom-buttons'>
          <button onClick={() => createDraft(post) }>
              Save
          </button>
          <button onClick={() => handleReview(post) }>
              Review
          </button>
      </div>
    );
}

export default BottomButtons;