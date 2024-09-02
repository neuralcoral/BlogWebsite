import Markdown from 'react-markdown';

export interface PostPreviewProps {
    text: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({ text }) => {
    return (
        <Markdown>{text}</Markdown>
    )
}

export default PostPreview;
