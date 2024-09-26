import { buildDraftPostUrl } from '../../utils/postUtils';
import { v4 as uuidv4 } from 'uuid';

export interface PageInfo {
  pageName: string;
  route: () => string;
  isAdmin: boolean;
}

const pageInfo = (pageName: string, route: () => string, isAdmin: boolean) => {
  return { pageName: pageName, route: route, isAdmin };
};

export const PAGES = [
  pageInfo('Home', () => '/', false),
  pageInfo('About', () => '/about', false),
  pageInfo('Create Post', () => buildDraftPostUrl(uuidv4()), true),
  pageInfo('Edit Posts', () => '/posts/edit', true)
];
