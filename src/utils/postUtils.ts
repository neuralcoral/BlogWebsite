import Post, { Status } from "../models/post"

export const initializePost = (id: string | undefined): Post => {
  if (typeof(id) === undefined) {
    throw new Error('Post ID is undefined');
  }
  
  return {
    id: String(id),
    title: 'New Post',
    body: '',
    status: Status.Draft,
    createdAt: new Date(Date.now().toLocaleString()),
    updatedAt: null
  };
}