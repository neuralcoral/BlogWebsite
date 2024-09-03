import { Status } from '../models/post';
import dummyPosts from './dummy-posts';
import { getDraftedPosts, getPosts, getPostedPosts } from './posts';

const mockGetPostsCallback = jest.fn(() => dummyPosts);

describe('Posts client Tests', () => {
  test('getPostedPosts returns list of post posts', async () => {
    const dummyPostedPosts = dummyPosts.filter((post) => post.status === Status.Posted);
    expect(await getPostedPosts({}))
    .toEqual(dummyPostedPosts);
  });

  test('getDraftedPosts returns list of drafted posts', async () => {
    const dummpyDraftedPosts = dummyPosts.filter((post) => post.status === Status.Draft);
    expect(await getDraftedPosts({}))
    .toEqual(dummpyDraftedPosts);
  });

  test('getPosts returns list of posts', async () => {
    expect(await getPosts({})).toEqual(dummyPosts);
  });

  test('get')
})


