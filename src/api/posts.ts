import Post, { Status } from '../models/post';
import dummyPosts from './dummy-posts';

export const getPosts = async ({ signal, status }: { signal?: AbortSignal, status?:Status }): Promise<Post[]> => {
  return new Promise((resolve, reject) => {
    
    let posts = dummyPosts;
    if (status){
      posts = dummyPosts.filter((post) => post.status === status);
    }
    const delay = setTimeout(() => {
      resolve(posts);
    }, 1000);

    signal?.addEventListener('abort', () => {
      clearTimeout(delay);
      reject(new DOMException('The user aborted a request.', 'AbortError'));
    });
  });
}

export const getPostedPosts = async ({ signal }: { signal?: AbortSignal }): Promise<Post[]> => {
  const status = Status.Posted;
  return getPosts({signal , status});
};

export const getDraftedPosts =  async ({ signal }: { signal?: AbortSignal }): Promise<Post[]> => {
  const status = Status.Draft;
  return getPosts({signal , status});
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
