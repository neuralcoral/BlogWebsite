import Post from "../../models/post";
import './DraftPost.css';

const TitleInput: React.FC<{post: Post, setPost: (post: Post) => void }> = ({post, setPost}) => (
    <div className='draft-title'>
      <input
        onChange={(e) => {
          setPost({
            ...post,
            title: e.target.value
          })
        }} value={post.title} />
    </div>
);

export default TitleInput;