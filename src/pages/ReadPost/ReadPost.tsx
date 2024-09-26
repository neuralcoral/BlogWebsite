import { Post } from '../../models/post';

interface ReadPostProps {
  post: Post;
}
const ReadPost: React.FC<ReadPostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.metadata.title}</h1>
      <h1>{post.content}</h1>
    </div>
  );
};
