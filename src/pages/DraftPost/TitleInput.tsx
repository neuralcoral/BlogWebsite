import React from 'react';
import './DraftPost.css';

interface TitleInputProps {
  title: string;
  setTitle: (title: string) => void 
}

const TitleInput: React.FC<TitleInputProps> = ({ title, setTitle }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="draft-title">
      <input onChange={handleChange} value={title} />
    </div>
  );
};

export default TitleInput;
