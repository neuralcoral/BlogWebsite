import './DraftPost.css';
import { useState, useReducer } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { initializePost } from '../../utils/postUtils';
import TitleInput from './TitleInput';
import SideButtons from './SideButtons';
import BottomButtons from './BottomButtons';
import PostViewToggle from './PostViewToggle';
import { draftPostReducer, PostContext, PostDispatchContext } from './DraftPostContext';
import DraftPreviewText from './DraftPreviewText';

const DraftPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const initialPost = location.state?.post ?? initializePost(id);
  const [post, dispatch] = useReducer(draftPostReducer, initialPost);

  const postToReview = location.state?.post;

  const [isEditing, setIsEditing] = useState(true);

  return (
    <PostContext.Provider value={post}>
      <PostDispatchContext.Provider value={dispatch}>
        <div className="draft">
          <TitleInput isEditing={isEditing} />
          <DraftPreviewText isEditing={isEditing} />
          <PostViewToggle isEditing={isEditing} />
          <SideButtons isEditing={isEditing} setIsEditing={setIsEditing} />
          <BottomButtons />
        </div>
      </PostDispatchContext.Provider>
    </PostContext.Provider>
  );
};

export default DraftPost;
