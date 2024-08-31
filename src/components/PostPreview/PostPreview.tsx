import Markdown from 'react-markdown';

export interface PostPreviewProps {
    text: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({ text }) => {
    return (
        <div className="preview">
            <Markdown>{text}</Markdown>
        </div>
    )
}

export default PostPreview;
