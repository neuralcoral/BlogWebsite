import './DraftPost.css';

interface BottomButtonsProps {
  handleSave: () => void;
  handleReview: () => void;
}
const BottomButtons: React.FC<BottomButtonsProps> = ({ handleSave, handleReview }) => {
  return (
    <div className="bottom-buttons">
      <button onClick={ handleSave }>Save</button>
      <button onClick={ handleReview }>Review</button>
    </div>
  );
};

export default BottomButtons;
