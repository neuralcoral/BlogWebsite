import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import DraftPost from '../../pages/DraftPost/DraftPost';
import ReviewPost from '../../pages/ReviewPost/ReviewPost';
import EditPostPreviews from '../../pages/EditPostPreviews/EditPostPreviews';
import AdminRoute from '../AdminRoute/AdminRoute';

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts/:id/draft" element={
        <AdminRoute>
          <DraftPost />
        </AdminRoute>
      } />
      <Route path="/posts/:id/review" element={
        <AdminRoute>
          <ReviewPost />
        </AdminRoute>
      } />
      <Route path="/posts/edit" element={
        <AdminRoute>
          <EditPostPreviews />
        </AdminRoute>
      } />
    </Routes>
  );
};

export default Content;
