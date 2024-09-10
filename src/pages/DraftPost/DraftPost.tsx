import './DraftPost.css';
import { ChangeEvent, useRef, useState, useContext, useReducer } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { initializePost } from '../../utils/postUtils';
import TitleInput from './TitleInput';
import SideButtons from './SideButtons';
import BottomButtons from './BottomButtons';
import PostViewToggle from './PostViewToggle';
import { createDraft } from '../../api/posts';
import DraftPreviewText from './DraftPreviewText';
import { DraftContext } from './DraftContext';
import { Post, PostMetadata } from '../../models/post';

const DraftPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const initialPost = location.state?.post ?? initializePost(id);
  const [post, dispatch] = useReducer(draftPostReducer, initialPost);

  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="draft">
      <TitleInput post={post} dispatch={dispatch} />
      <DraftPreviewText  post={post} dispatch={dispatch}/>
      <PostViewToggle post={post} dispatch={dispatch} isEditing={isEditing} />
      <SideButtons isEditing={isEditing} setIsEditing={setIsEditing} />
      <BottomButtons dispatch={dispatch} post={post}/>
    </div>
  );
};

export enum DraftPostActionType {
  SAVE,
  REVIEW,
  CHANGE
}

export interface DraftPostAction {
  type: DraftPostActionType;
  newPost: Post;
  callback: () => void;
}

function draftPostReducer(post: Post, action: DraftPostAction) {
  switch (action.type) {
    case DraftPostActionType.SAVE:
      createDraft(post.metadata);
      break;
    case DraftPostActionType.REVIEW:
      createDraft(post.metadata);
      action.callback()
      break;
    case DraftPostActionType.CHANGE:
      return action.newPost;
    default:
      throw Error('Unknown action: ' + action);
  }

  return post;
}

export default DraftPost;
