
export enum Status {
  Draft = "DRAFT",
  Posted = 'POSTED'
};

export default interface Post {
  id: number;
  title: string;
  body: string;
  status: Status
  createdAt: Date;
  updatedAt: Date | null;
}