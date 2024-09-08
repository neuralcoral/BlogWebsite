export enum Status {
  Draft = 'DRAFT',
  Posted = 'POSTED'
}

export default interface Post {
  id: string;
  title: string;
  body: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date | null;
}
