import { useNavigate } from 'react-router-dom';
import { buildReviewPostUrl } from '../../utils/postUtils';
import './DraftPost.css';
import { usePost, usePostDispatch, DraftPostActionType, DraftPostAction } from './DraftPostContext';
import React from 'react';

interface BottomButtonsProps {}
const BottomButtons: React.FC<BottomButtonsProps> = ({}) => {
  const navigate = useNavigate();
  const post = usePost();
  const dispatch = usePostDispatch();

  const handleSave = () => {
    if (!dispatch) {
      throw new Error('dispatch must be used within a Provider');
    }
    if (!post) {
      throw new Error('post must be initialized');
    }
    console.log('Handling save');
    dispatch({
      type: DraftPostActionType.SAVE,
      newPost: post,
      callback: () => {}
    });
  };
  const handleReview = () => {
    if (!dispatch) {
      throw new Error('dispatch must be used within a Provider');
    }
    if (!post) {
      throw new Error('post must be initialized');
    }
    dispatch({
      type: DraftPostActionType.REVIEW,
      newPost: post,
      callback: () => navigate(buildReviewPostUrl(post?.metadata.id), { state: { post: post } })
    });
  };
  return (
    <div className="bottom-buttons">
      <button onClick={() => handleSave()}>Save</button>
      <button onClick={() => handleReview()}>Review</button>
    </div>
  );
};

export default BottomButtons;
