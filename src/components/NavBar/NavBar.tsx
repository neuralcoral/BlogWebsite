import {useState} from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    function toggleShow() {
        setShow(!show);
    }

    function options() {
        return (
            <>
                <li className='option' onClick={() => navigate('/')}>Home</li>
                <li className='option' onClick={() => navigate('/about')}>About</li>
                <li className='option' onClick={() => navigate('/login')}>Login</li>
                <li className='option' onClick={() => {
                    const newId = uuidv4();
                    navigate(`/posts/${newId}/draft`)
                }}>Create Post</li>
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