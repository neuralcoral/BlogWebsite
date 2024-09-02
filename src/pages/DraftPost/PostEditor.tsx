import Post from "../../models/post";

export interface PostEditorProps {
    post: Post;
    setPost: (value: Post) => void;
}

const PostEditor: React.FC<PostEditorProps> = ({post, setPost}) => {
    return (
        <textarea onChange={e => {
            const changedPost = {
                ...post,
                body: e.target.value
            };
            setPost(changedPost)}}>{post.body}</textarea>
    );
};

export default PostEditor;
