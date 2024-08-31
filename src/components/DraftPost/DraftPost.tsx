import './DraftPost.css'
import {useState} from 'react'
import NavBar from '../NavBar/NavBar';
import PostEditor from '../PostEditor/PostEditor';
import PostPreview from '../PostPreview/PostPreview';

const DraftPost: React.FC = () => {
    const [value, setValue] = useState("# Mark Down World");
    const [isPreview, setIsPreview] = useState(false);

    return (
      <div className='container'>
            <div>
                {isPreview ? <PostPreview text={value} /> : <PostEditor text={value} setText={setValue} />}
            </div>
            <div>
                <button className="circle-button" onClick={() => setIsPreview(!isPreview)}>
                    {isPreview ? 'Edit' : 'Preview'}
                </button>
            </div>
      </div>
    );

};

export default DraftPost;