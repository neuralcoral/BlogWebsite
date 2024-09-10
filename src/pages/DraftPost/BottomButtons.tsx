import { useNavigate } from 'react-router-dom';
import { Post } from '../../models/post';
import { buildReviewPostUrl } from '../../utils/postUtils';
import { DraftPostAction, DraftPostActionType } from './DraftPost';
import './DraftPost.css';

interface BottomButtonsProps {
  dispatch: React.Dispatch<DraftPostAction>,
  post: Post
}
const BottomButtons: React.FC<BottomButtonsProps> = ({ dispatch, post }) => {
  const navigate = useNavigate();
  const handleSave = () => {dispatch({type: DraftPostActionType.SAVE, newPost:post, callback: ()=> {}})}
  const handleReview = () => {
    dispatch({type: DraftPostActionType.REVIEW,
       newPost: post,
       callback: () => navigate(buildReviewPostUrl(post.metadata.id), { state: { post: post } })
      })}
  return (
    <div className="bottom-buttons">
      <button onClick={ handleSave }>Save</button>
      <button onClick={ handleReview }>Review</button>
    </div>
  );
};

export default BottomButtons;
