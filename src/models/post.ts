import Tag from './tag';

export enum Status {
  Draft = 'DRAFT',
  Posted = 'POSTED'
}

export interface PostMetadata {
  id: string;
  title: string;
  bodyUrl: string;
  previewText: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date | null;
  tags: Tag[];
}

export interface Post {
  metadata: PostMetadata;
  content: string;
}
