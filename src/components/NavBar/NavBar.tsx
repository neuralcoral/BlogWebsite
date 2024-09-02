import {useState} from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { buildDraftPostUrl } from '../../utils/postUtils';

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    function toggleShow() {
        setShow(!show);
    }

    function options() {
        const HOME = '/';
        const ABOUT = '/about';
        const LOGIN = '/login';
        const CREATE_POST = buildDraftPostUrl(uuidv4());
        const EDIT_POSTS = '/posts/edit';
        return (
            <>
                <li className='option' onClick={() => navigate(HOME)}>Home</li>
                <li className='option' onClick={() => navigate(ABOUT)}>About</li>
                <li className='option' onClick={() => navigate(LOGIN)}>Login</li>
                <li className='option' onClick={() => navigate(CREATE_POST)}>Create Post</li>
                <li className='option' onClick={() => navigate(EDIT_POSTS)}>Edit Posts</li>
            </>
        );
    }

    return (
        <div className={`side-nav ${show ? 'visible' : ''}`}>
            <ul>
                {show && options()}
                <li className='toggle-show' onClick={toggleShow}>🧠</li>
            </ul>
        </div>
    );
}

export default NavBar;