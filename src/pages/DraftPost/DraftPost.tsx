import './styles/DraftPost.css'
import {useState} from 'react'
import PostEditor from './PostEditor';
import PostPreview from './PostPreview';
import { FaEdit } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";

const DraftPost: React.FC = () => {
    const [value, setValue] = useState("# Mark Down World");
    const [isEditor, setIsEditor] = useState(true);

    return (
      <div className='draft-container'>
            <div className='draft'>
                <div className='draft-title'>
                    <input value={'Title'}/>
                </div>
                <div className='draft-text'>
                    {isEditor ? <PostEditor text={value} setText={setValue} /> : <PostPreview text={value} /> }
                </div>
                <div className='draft-buttons'>
                    <button>
                        Save
                    </button>
                    <button>
                        Review
                    </button>
                </div>
            </div>
            <div className='side-buttons'>
                <div className='preview-edit-toggle' onClick={() => setIsEditor(!isEditor)}>
                    {isEditor ? <VscOpenPreview /> : <FaEdit /> }
                </div>
            </div>
      </div>
    );

};

export default DraftPost;