import Post, { Status } from '../models/post';
import dummyPosts from './dummy-posts';

export const getPostedPosts = async ({ signal }: { signal?: AbortSignal }): Promise<Post[]> => {
  return new Promise((resolve, reject) => {
    const posts = dummyPosts.filter((post) => post.status === Status.Posted);
    const delay = setTimeout(() => {
      resolve(posts);
    }, 1000);

    signal?.addEventListener('abort', () => {
      clearTimeout(delay);
      reject(new DOMException('The user aborted a request.', 'AbortError'));
    });
  });
};

export const getDraftedPosts = () => {
  return dummyPosts.filter((post) => post.status === Status.Draft);
};

export const getPost = (id: string) => {
  const posts = dummyPosts.filter((post) => id === post.id);
  if (posts.length !== 1) {
    throw new Error(`Post with ID ${id} not found`);
  }
  return posts[0];
}

export const createDraft = (post: Post) => {
  dummyPosts.push(post);
  
}

export const submitPost = (post: Post) => {
  const newPost = {
    ...post,
    status: Status.Posted,
    updateAt: new Date(Date.now().toLocaleString())
  }
  dummyPosts.push(newPost);
}
