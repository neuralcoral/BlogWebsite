import './DraftPost.css'
import {useState} from 'react'
import PostEditor from './PostEditor';
import PostPreview from './PostPreview';
import { FaEdit } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { createDraft } from '../../api/posts';
import { buildReviewPostUrl, initializePost } from '../../utils/postUtils';
import Post from '../../models/post';

const DraftPost: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>(); // Extract the id from the URL
    const location = useLocation();
    const reviewedPost = location.state?.post; // Access the passed post
    const [post, setPost] = useState(reviewedPost ?? initializePost(id));
    const [isEditing, setIsEditing] = useState(true);

    const handleReview = (post: Post) => {
        createDraft(post);
        navigate(buildReviewPostUrl(post.id), {state: { post: post }});
    };

    return (
        <div className='draft'>
            <div className='draft-title'>
                <input onChange = {(e) => {
                    setPost({
                        ...post,
                        title: e.target.value
                    })
                }} value={post.title}/>
            </div>
            <div className='draft-text'>
                {isEditing ? <PostEditor post={post} setPost={setPost} /> : <PostPreview post={post} /> }
            </div>
            <div className='side-buttons'>
                <div className='preview-edit-toggle' onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? <VscOpenPreview /> : <FaEdit /> }
                </div>
            </div>
            <div className='bottom-buttons'>
                <button onClick={() => createDraft(post) }>
                    Save
                </button>
                <button onClick={() => handleReview(post) }>
                    Review
                </button>
            </div>
        </div>
    );

};

export default DraftPost;