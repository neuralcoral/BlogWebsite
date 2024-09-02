import { Status } from '../models/post';
import dummyPosts from './dummy-posts';
import { getPost, getPostedPosts } from './posts';

const mockGetPostsCallback = jest.fn(() => dummyPosts);


test('get posts returns list of posts', async () => {
  const dummyPostedPosts = dummyPosts.filter((post) => post.status === Status.Posted);
  expect(await getPostedPosts({}))
  .toEqual(dummyPostedPosts);

})