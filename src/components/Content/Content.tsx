import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import DraftPost from '../../pages/DraftPost/DraftPost';
import ReviewPost from '../../pages/ReviewPost/ReviewPost';
import EditPosts from '../../pages/EditPosts/EditPosts';

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
                path="/posts/:id/draft"
                element={<DraftPost />}
              />
              <Route
                path="/posts/:id/review"
                element={<ReviewPost />}
              />
              <Route
                path="/posts/edit"
                element={<EditPosts />}
              />
            </Routes>
    );
};

export default Content;