import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginAdmin } = useAdmin();

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Username: ' + username);
    console.log('Password: ' + password);
    if (username === 'Username' && password === 'Password') {
      // Needs to be updated with Axios
      loginAdmin();
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <Link to="/" className="home-link">
        Home
      </Link>
      <form className="login-form" onSubmit={handleSubmitLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
