import { DraftPostActionType, usePost, usePostDispatch } from './DraftPostContext';


export interface PostEditorProps { }
const PostEditor: React.FC<PostEditorProps> = () => {
  const post = usePost();
  const dispatch = usePostDispatch();
  const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        content: e.target.value
      },
      callback: () => { }
    });
  };
  return <textarea value={post?.content} onChange={handleChange} />;
};

export default PostEditor;
