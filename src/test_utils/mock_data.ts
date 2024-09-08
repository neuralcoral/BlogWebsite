import PostMetadata, { Post, Status } from '../models/post';
import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker';

export const fakePostMetadata: PostMetadata = {
  id: uuid(),
  title: faker.lorem.sentence(),
  bodyUrl: faker.internet.url(),
  previewText: faker.lorem.sentences({min:1, max: 4}),
  status: Status.Draft,
  createdAt: new Date(Date.now().toLocaleString()),
  updatedAt: null,
  tags: []
};

export const fakePostMetadataEntries: PostMetadata[] = [
  {
    id: uuid(),
    title: 'Understanding TypeScript',
    bodyUrl: faker.internet.url(),
    previewText: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    status: Status.Posted,
    createdAt: new Date('2024-08-01T10:00:00Z'),
    updatedAt: new Date('2024-08-02T12:00:00Z'),
    tags: []
  },
  {
    id: uuid(),
    title: 'Getting Started with React',
    bodyUrl: faker.internet.url(),
    previewText: 'React is a JavaScript library for building user interfaces.',
    status: Status.Draft,
    createdAt: new Date('2024-08-03T09:30:00Z'),
    updatedAt: null,
    tags: []
  },
  {
    id: uuid(),
    title: 'Exploring Node.js',
    bodyUrl: faker.internet.url(),
    previewText: 'Node.js is a runtime environment that allows JavaScript to run on the server.',
    status: Status.Posted,
    createdAt: new Date('2024-08-05T14:20:00Z'),
    updatedAt: new Date('2024-08-06T16:45:00Z'),
    tags: []
  },
  {
    id: uuid(),
    title: 'Introduction to Docker',
    bodyUrl: faker.internet.url(),
    previewText: 'Docker is a platform designed to help developers build, share, and run applications in containers.',
    status: Status.Draft,
    createdAt: new Date('2024-08-07T08:15:00Z'),
    updatedAt: null,
    tags: []
  },
  {
    id: uuid(),
    title: 'CI/CD with GitHub Actions',
    bodyUrl: faker.internet.url(),
    previewText: 'GitHub Actions is a tool to automate your software development workflows.',
    status: Status.Posted,
    createdAt: new Date('2024-08-10T11:45:00Z'),
    updatedAt: new Date('2024-08-11T13:00:00Z'),
    tags: []
  },
  {
    id: uuid(),
    title: 'REST API Design Best Practices',
    bodyUrl: faker.internet.url(),
    previewText: 'REST APIs are a crucial part of modern web development, providing a way to interact with web services.',
    status: Status.Draft,
    createdAt: new Date('2024-08-12T10:05:00Z'),
    updatedAt: null,
    tags: []
  },
  {
    id: uuid(),
    title: 'Advanced JavaScript Concepts',
    bodyUrl: faker.internet.url(),
    previewText: 'JavaScript offers many advanced features like closures, promises, and async/await.',
    status: Status.Posted,
    createdAt: new Date('2024-08-14T09:10:00Z'),
    updatedAt: new Date('2024-08-15T10:25:00Z'),
    tags: []
  },
  {
    id: uuid(),
    title: 'Introduction to Kubernetes',
    previewText: 'Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.',
    bodyUrl: faker.internet.url(),
    status: Status.Draft,
    createdAt: new Date('2024-08-16T07:50:00Z'),
    updatedAt: null,
    tags: []
  },
  {
    id: uuid(),
    title: 'Understanding GraphQL',
    previewText: 'GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.',
    bodyUrl: faker.internet.url(),
    status: Status.Posted,
    createdAt: new Date('2024-08-18T12:30:00Z'),
    updatedAt: new Date('2024-08-19T14:00:00Z'),
    tags: []
  },
  {
    id: uuid(),
    title: 'Building Mobile Apps with React Native',
    previewText: 'React Native allows you to build mobile apps using JavaScript and React.',
    bodyUrl: faker.internet.url(),
    status: Status.Draft,
    createdAt: new Date('2024-08-20T15:00:00Z'),
    updatedAt: null,
    tags: []
  }
];

export const fakePost: Post = {
  metadata: fakePostMetadata,
  content: faker.lorem.paragraph({min: 2, max: 10})
} ;