import './styles/DraftPost.css'
import {useState} from 'react'
import PostEditor from './PostEditor';
import PostPreview from './PostPreview';
import { FaEdit } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

const DraftPost: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState("# Mark Down World");
    const [isEditor, setIsEditor] = useState(true);

    return (
        <div className='draft'>
            <div className='draft-title'>
                <input value={'Title'}/>
            </div>
            <div className='draft-text'>
                {isEditor ? <PostEditor text={value} setText={setValue} /> : <PostPreview text={value} /> }
            </div>
            <div className='side-buttons'>
                <div className='preview-edit-toggle' onClick={() => setIsEditor(!isEditor)}>
                    {isEditor ? <VscOpenPreview /> : <FaEdit /> }
                </div>
            </div>
            <div className='bottom-buttons'>
                <button>
                    Save
                </button>
                <button onClick={() => navigate('/posts/review/1')}>
                    Review
                </button>
            </div>
        </div>
    );

};

export default DraftPost;