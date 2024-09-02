import Markdown from 'react-markdown';
import Post from '../../models/post';

export interface PostPreviewProps {
    post: Post;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }: PostPreviewProps) => {
    return (
        <>
            <Markdown>{post.body}</Markdown>
        </>
    )
}

export default PostPreview;
