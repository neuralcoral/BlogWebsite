import Post from '../../models/post';
import PostEditor from './PostEditor';
import PostPreview from './PostPreview';
import './DraftPost.css'

interface PostViewToggleProps {
  post: Post;
  setPost: (post: Post) => void;
  isEditing: boolean;
}
const PostViewToggle: React.FC<PostViewToggleProps> = ({post, setPost, isEditing}) => {
  return (
    <div className='draft-text'>
        {isEditing ? <PostEditor post={post} setPost={setPost} /> : <PostPreview post={post} /> }
    </div>
  );
};

export default PostViewToggle;