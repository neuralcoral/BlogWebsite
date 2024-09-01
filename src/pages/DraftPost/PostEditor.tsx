export interface PostEditorProps {
    text: string;
    setText: (value: string) => void;
}

const PostEditor: React.FC<PostEditorProps> = ({text, setText}) => {
    return (
        <textarea onChange={e => setText(e.target.value)}>{text}</textarea>
    );
};

export default PostEditor;
