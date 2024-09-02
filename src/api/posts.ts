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

export const getPost = (id: number) => {
  const posts = dummyPosts.filter((post) => id === post.id);
  if (posts.length !== 1) {
    throw new Error(`Post with id ${id} not found`);
  }
  return posts[0];
}

export const createDraft = (title: string, body: string) => {
  const newId = dummyPosts[dummyPosts.length - 1].id + 1;
  dummyPosts.push({
    id: newId,
    title: title,
    body: body,
    status: Status.Draft,
    createdAt: new Date(Date.now().toLocaleString()),
    updatedAt: null
  });
}

export const createPost = (post: Post) => {
  
  const newId = dummyPosts[dummyPosts.length - 1].id + 1;
  dummyPosts.push({
    id: newId,
    title: post.title,
    body: post.body,
    status: Status.Draft,
    createdAt: new Date(Date.now().toLocaleString()),
    updatedAt: null
  });
}
