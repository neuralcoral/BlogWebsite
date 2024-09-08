import { Post } from '../../models/post';

export interface PostEditorProps {
  post: Post;
  setPost: (value: Post) => void;
}

const PostEditor: React.FC<PostEditorProps> = ({ post, setPost }) => {
  const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedPost = {
      ...post,
      content: e.target.value
    };
    setPost(changedPost);
  };
  return <textarea value={post.content} onChange={handleChange} />;
};

export default PostEditor;
