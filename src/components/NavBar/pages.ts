import { buildDraftPostUrl } from "../../utils/postUtils";
import { v4 as uuidv4 } from 'uuid';

const pageInfo = (pageName: string, route: Function) => {
  return {'pageName': pageName, 'route': route};
}


export const PAGES = [
  pageInfo('Home', () => '/'),
  pageInfo('About', () => '/about'),
  pageInfo('Login', () => '/login'),
  pageInfo('Create Post', () => buildDraftPostUrl(uuidv4())),
  pageInfo('Edit Posts', () => '/posts/edit'),
];