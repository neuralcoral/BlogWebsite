import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import DraftPost from '../../pages/DraftPost/DraftPost';
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