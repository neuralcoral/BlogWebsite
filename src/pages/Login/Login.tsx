import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("Username");
    const [password, setPassword] = useState("Password");
    const navigate = useNavigate();

    const handleSubmitLogin = () => {
        console.log('Username: ' + username);
        console.log('Password: ' + password);
        if (username === 'Username' && password === 'Password') {
            navigate("/createPost");
        }

    }

    

    return (
        <div > 
            <Link to="/" className="home-link">
                Home
            </Link>
            <form>
                <input 
                    type="text" 
                    id="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <button onClick={handleSubmitLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;