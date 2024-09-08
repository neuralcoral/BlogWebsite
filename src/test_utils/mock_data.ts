import Post, { Status } from '../models/post';
import { v4 as uuid } from 'uuid';

export const fakePost: Post = {
  id: 'some-uuid',
  title: 'Title',
  body: 'Body Text',
  status: Status.Draft,
  createdAt: new Date(Date.now().toLocaleString()),
  updatedAt: null
};

export const fakePosts: Post[] = [
  {
    id: uuid(),
    title: "Understanding TypeScript",
    body: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    status: Status.Posted,
    createdAt: new Date('2024-08-01T10:00:00Z'),
    updatedAt: new Date('2024-08-02T12:00:00Z')
  },
  {
    id: uuid(),
    title: "Getting Started with React",
    body: "React is a JavaScript library for building user interfaces.",
    status: Status.Draft,
    createdAt: new Date('2024-08-03T09:30:00Z'),
    updatedAt: null
  },
  {
    id: uuid(),
    title: "Exploring Node.js",
    body: "Node.js is a runtime environment that allows JavaScript to run on the server.",
    status: Status.Posted,
    createdAt: new Date('2024-08-05T14:20:00Z'),
    updatedAt: new Date('2024-08-06T16:45:00Z')
  },
  {
    id: uuid(),
    title: "Introduction to Docker",
    body: "Docker is a platform designed to help developers build, share, and run applications in containers.",
    status: Status.Draft,
    createdAt: new Date('2024-08-07T08:15:00Z'),
    updatedAt: null
  },
  {
    id: uuid(),
    title: "CI/CD with GitHub Actions",
    body: "GitHub Actions is a tool to automate your software development workflows.",
    status: Status.Posted,
    createdAt: new Date('2024-08-10T11:45:00Z'),
    updatedAt: new Date('2024-08-11T13:00:00Z')
  },
  {
    id: uuid(),
    title: "REST API Design Best Practices",
    body: "REST APIs are a crucial part of modern web development, providing a way to interact with web services.",
    status: Status.Draft,
    createdAt: new Date('2024-08-12T10:05:00Z'),
    updatedAt: null
  },
  {
    id: uuid(),
    title: "Advanced JavaScript Concepts",
    body: "JavaScript offers many advanced features like closures, promises, and async/await.",
    status: Status.Posted,
    createdAt: new Date('2024-08-14T09:10:00Z'),
    updatedAt: new Date('2024-08-15T10:25:00Z')
  },
  {
    id: uuid(),
    title: "Introduction to Kubernetes",
    body: "Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.",
    status: Status.Draft,
    createdAt: new Date('2024-08-16T07:50:00Z'),
    updatedAt: null
  },
  {
    id: uuid(),
    title: "Understanding GraphQL",
    body: "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.",
    status: Status.Posted,
    createdAt: new Date('2024-08-18T12:30:00Z'),
    updatedAt: new Date('2024-08-19T14:00:00Z')
  },
  {
    id: uuid(),
    title: "Building Mobile Apps with React Native",
    body: "React Native allows you to build mobile apps using JavaScript and React.",
    status: Status.Draft,
    createdAt: new Date('2024-08-20T15:00:00Z'),
    updatedAt: null
  }
];
