import Post, { Status } from '../models/post';

export const initialPost: Post = {
  id: 'some-uuid',
  title: 'Title',
  body: 'Body Text',
  status: Status.Draft,
  createdAt: new Date(Date.now().toLocaleString()),
  updatedAt: null
}
