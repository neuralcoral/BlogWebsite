import './DraftPost.css'
import {useState} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { initializePost } from '../../utils/postUtils';
import TitleInput from './TitleInput';
import SideButtons from './SideButtons';
import BottomButtons from './BottomButtons';
import PostViewToggle from './PostViewToggle';

const DraftPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();

    const postToReview = location.state?.post;

    const [post, setPost] = useState(postToReview ?? initializePost(id));
    const [isEditing, setIsEditing] = useState(true);

    return (
        <div className='draft'>
            <TitleInput post={post} setPost={setPost}/>
            <PostViewToggle post={post} setPost={setPost} isEditing={isEditing} />
            <SideButtons isEditing={isEditing} setIsEditing={setIsEditing} />
            <BottomButtons post={post} />
        </div>
    );

};

export default DraftPost;