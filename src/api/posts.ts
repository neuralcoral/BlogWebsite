import { Status, PostMetadata } from '../models/post';
import dummyPosts from './dummy-posts';

export const getPostedPosts = async ({ signal }: { signal?: AbortSignal }): Promise<PostMetadata[]> => {
  const status = Status.Posted;
  return getPosts({ signal, status });
};

export const getDraftedPosts = async ({ signal }: { signal?: AbortSignal }): Promise<PostMetadata[]> => {
  const status = Status.Draft;
  return getPosts({ signal, status });
};

export const getPosts = async ({
  signal,
  status
}: {
  signal?: AbortSignal;
  status?: Status;
}): Promise<PostMetadata[]> => {
  return new Promise((resolve, reject) => {
    let posts = dummyPosts;
    if (status) {
      posts = dummyPosts.filter((post) => post.status === status);
    }
    const delay = setTimeout(() => {
      resolve(posts);
    }, 500);

    signal?.addEventListener('abort', () => {
      clearTimeout(delay);
      reject(new DOMException('The user aborted a request.', 'AbortError'));
    });
  });
};

export const getPost = (id: string) => {
  const posts = dummyPosts.filter((post) => id === post.id);
  if (posts.length !== 1) {
    throw new Error(`Post with ID ${id} not found`);
  }
  return posts[0];
};

export const createDraft = (post: PostMetadata) => {
  dummyPosts.push(post);
};

export const submitPost = (post: PostMetadata) => {
  const newPost = {
    ...post,
    status: Status.Posted,
    updateAt: new Date(Date.now().toLocaleString())
  };
  dummyPosts.push(newPost);
};
