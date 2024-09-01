import PostPreview from "../DraftPost/PostPreview";
import './styles/ReviewPost.css';

const ReviewPost: React.FC = () => {
  return (
    <div className="review-post">
      <div className="review-text">
        <PostPreview text={'# Hello World!'}/> 
      </div>
      <div className="review-buttons">
        <button>Edit</button>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default ReviewPost;