import { Post } from '../../models/post';
import PostEditor from './PostEditor';
import PostPreview from './PostPreview';
import './DraftPost.css';
import { DraftPostAction } from './DraftPost';

interface PostViewToggleProps {
  post: Post;
  dispatch: React.Dispatch<DraftPostAction>;
  isEditing: boolean;
}

const PostViewToggle: React.FC<PostViewToggleProps> = ({ post, dispatch, isEditing }) => {
  return (
    <div className="draft-text">
      {isEditing ? <PostEditor post={post} dispatch={dispatch} /> : <PostPreview post={post} />}
    </div>
  );
};

export default PostViewToggle;
