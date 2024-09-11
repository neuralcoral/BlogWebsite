import './DraftPost.css';
import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';

interface TitleInputProps { }
const TitleInput: React.FC<TitleInputProps> = () => {
  const post = usePost();
  const dispatch = usePostDispatch();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!dispatch) {
      throw new Error("dispatch must be used within a Provider");
    }
    if (!post) {
      throw new Error('post must be initialized');
    }
    dispatch({
      type: DraftPostActionType.CHANGE,
      newPost: {
        ...post,
        metadata: {
          ...post.metadata,
          title: e.target.value
        }
      },
      callback: () => {}
    });
  };
  return (
    <div className="draft-title">
      <input onChange={handleChange} value={post?.metadata.title} />
    </div>
  );
};

export default TitleInput;
