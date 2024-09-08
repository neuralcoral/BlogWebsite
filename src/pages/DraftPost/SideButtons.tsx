import { VscOpenPreview } from 'react-icons/vsc';
import { FaEdit } from 'react-icons/fa';
import './DraftPost.css';

interface SideButtonsProps {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}
const SideButtons: React.FC<SideButtonsProps> = ({ isEditing, setIsEditing }) => (
  <div className="side-buttons">
    <div className="preview-edit-toggle" onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? <VscOpenPreview /> : <FaEdit />}
    </div>
  </div>
);

export default SideButtons;
