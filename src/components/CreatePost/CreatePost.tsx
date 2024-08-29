import './CreatePost.css'
import Markdown from 'react-markdown';
import {useState} from 'react'
import NavBar from '../NavBar/NavBar';

const CreatePost: React.FC = () => {
    const [value, setValue] = useState("# Mark Down World");

    return (
      <div className="editor">
        <textarea
          onChange={e => setValue(e.target.value)}
        >{value}</textarea>
        <Markdown>{value}</Markdown>
      </div>
    );

};

export default CreatePost;