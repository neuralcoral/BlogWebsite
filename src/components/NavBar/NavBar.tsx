import {useState} from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { buildDraftPostUrl } from '../../utils/postUtils';
import { PAGES } from './pages';

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    function toggleShow() {
        setShow(!show);
    }

    function options() {
        return (
            <>
                { 
                    PAGES.map((page) => {
                        return (
                            <li 
                            className='option' 
                            key={page.pageName.replace(/\s/g, "").toLowerCase()}
                            onClick={() => navigate(page.route())}>
                                {page.pageName}
                            </li>
                        );
                    })
                }
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