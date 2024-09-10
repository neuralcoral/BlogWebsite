import { Post } from '../../models/post';
import { DraftPostAction, DraftPostActionType } from './DraftPost';

export interface PostEditorProps {
  post: Post;
  dispatch: React.Dispatch<DraftPostAction>
}

const PostEditor: React.FC<PostEditorProps> = ({ post, dispatch }) => {
  const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const action: DraftPostAction = {
        type: DraftPostActionType.CHANGE,
        newPost: {
          ...post,
          content: e.target.value
        }
      }
    dispatch(action);
  };
  return <textarea value={post.content} onChange={handleChange} />;
};

export default PostEditor;
