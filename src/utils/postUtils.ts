import { Status, PostMetadata, Post } from '../models/post';

export const initializePost = (id: string | undefined): Post => {
  return {
    metadata: initalizePostMetadata(id),
    content: ''
  };
};

export const initalizePostMetadata = (id: string | undefined): PostMetadata => {
  if (typeof id === 'undefined') {
    throw new Error('Post ID is undefined');
  }
  return {
    id: String(id),
    title: 'New Post',
    previewText: '',
    bodyUrl: '',
    status: Status.Draft,
    createdAt: new Date(Date.now().toLocaleString()),
    updatedAt: null,
    tags: []
  };
};

export const buildReviewPostUrl = (id: string): string => {
  return `/posts/${id}/review`;
};

export const buildDraftPostUrl = (id: string): string => {
  return `/posts/${id}/draft`;
};
