import './CreatePost.css'
import Markdown from 'react-markdown';
import {useState} from 'react'

const CreatePost: React.FC = () => {
    const [value, setValue] = useState("# Mark Down World");
    const [isPreview, setIsPreview] = useState(false);

    const PostEditor = () => {
        return ( 
          <div className="editor">
            <textarea onChange={e => setValue(e.target.value)}>{value}</textarea>
          </div>
        );
    };

    const PostPreview = () => {
      return (
        <div className="preview">
          <Markdown>{value}</Markdown>
        </div>
      )
    }

    return (
      <div >
        { isPreview ?  PostPreview() : PostEditor() }
        <button className="circle-button" onClick={() => setIsPreview(!isPreview)}>
          {isPreview ? 'Edit' : 'Preview'}
        </button>
      </div>
    );

};

export default CreatePost;