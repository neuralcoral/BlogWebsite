import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Login from '../Login/Login';
import DraftPost from '../DraftPost/DraftPost';
const Content: React.FC = () => {
    return (
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/posts/draft"
                element={<DraftPost />}
              />
            </Routes>
    );
};

export default Content;