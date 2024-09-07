import { fireEvent, render, screen } from '@testing-library/react';
import Post, { Status } from '../../models/post';
import BottomButtons from "./BottomButtons";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { createDraft } from '../../api/posts';
import { buildReviewPostUrl } from '../../utils/postUtils';


const mockNavigate = jest.fn();
jest.mock('../../api/posts');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));
describe('BottomButtons componenet', () => {

  const post: Post = {
    id: 'some-uuid',
    title: 'Title',
    body: 'Body Text',
    status: Status.Draft,
    createdAt: new Date(Date.now().toLocaleString()),
    updatedAt: null
  };

  test('displays buttons', () => {
    render(
      <Router>
        <BottomButtons post={post} />
      </Router>
    );

    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByText(/Review/i)).toBeInTheDocument();
  });

  test('clicking on Save saves draft', () => {
    render(
      <Router>
        <BottomButtons post={post} />
      </Router>
    );

    const button = screen.getByText(/Save/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    
    expect(createDraft).toHaveBeenCalledWith(post);
  });

  test('clicking on Review saves and navigates', () => {
    render(
      <Router>
        <BottomButtons post={post} />
      </Router>
    );

    const button = screen.getByText(/Review/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    
    expect(createDraft).toHaveBeenCalledWith(post);
    expect(mockNavigate).toHaveBeenCalledWith(buildReviewPostUrl(post.id), {state: {post: post}});

  })

})