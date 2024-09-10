import { Post } from '../../models/post';
import { DraftPostAction, DraftPostActionType } from './DraftPost';
import './DraftPost.css';

interface BottomButtonsProps {
  dispatch: React.Dispatch<DraftPostAction>,
  post: Post
}
const BottomButtons: React.FC<BottomButtonsProps> = ({ dispatch, post }) => {
  const handleSave = () => {dispatch({type: DraftPostActionType.SAVE, newPost: post})}
  const handleReview = () => {dispatch({type: DraftPostActionType.REVIEW, newPost: post})}
  return (
    <div className="bottom-buttons">
      <button onClick={ handleSave }>Save</button>
      <button onClick={ handleReview }>Review</button>
    </div>
  );
};

export default BottomButtons;
