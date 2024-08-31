
export interface PostEditorProps {
    text: string;
    setText: (value: string) => void;
}

const PostEditor: React.FC<PostEditorProps> = ({text, setText}) => {
    return (
        <div className="editor">
            <textarea onChange={e => setText(e.target.value)}>{text}</textarea>
        </div>
    );
};

export default PostEditor;
