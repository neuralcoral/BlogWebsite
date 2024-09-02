import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import DraftPost from '../../pages/DraftPost/DraftPost';
import ReviewPost from '../../pages/ReviewPost/ReviewPost';
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
              <Route
                path="/posts/review/:id"
                element={<ReviewPost />}
              />
            </Routes>
    );
};

export default Content;