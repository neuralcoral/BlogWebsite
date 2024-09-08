import React from 'react';
import { render, screen } from '@testing-library/react';
import EditPost from './EditPost';
import { fakePost } from '../../test_utils/mock_data';

describe('EditPost component', () => {
  const largeText = 'Lorem ipsum'.repeat(100);
  test('With preview length and greater than preview length size', () => {
    render(<EditPost post={fakePost} previewLength={1} />);

    expect(screen.getByText(fakePost.title)).toBeInTheDocument();
    expect(screen.getByText(fakePost.body.substring(0, 1) + '...')).toBeInTheDocument();
    expect(screen.queryByText(fakePost.body)).not.toBeInTheDocument();
  });

  test('With preview length and less than preview length size', () => {
    render(<EditPost post={fakePost} previewLength={1000} />);

    expect(screen.getByText(fakePost.title)).toBeInTheDocument();
    expect(screen.getByText(fakePost.body)).toBeInTheDocument();
  });

  test('Without preview length and less than preview length size', () => {
    render(
      <EditPost
        post={{
          ...fakePost,
          body: 'a'
        }}
      />
    );

    expect(screen.getByText(fakePost.title)).toBeInTheDocument();
    expect(screen.getByText('a')).toBeInTheDocument();
  });

  test('Without preview length and greater than preview length size', () => {
    render(
      <EditPost
        post={{
          ...fakePost,
          body: largeText
        }}
      />
    );

    expect(screen.getByText(fakePost.title)).toBeInTheDocument();
    expect(screen.getByText(largeText.substring(0, 100) + '...')).toBeInTheDocument();
    expect(screen.queryByText(largeText)).not.toBeInTheDocument();
  });
});
