import { createContext, useContext } from 'react';
import { Post } from '../../models/post';
import { createDraft } from '../../api/posts';

export const PostContext = createContext<Post | null>(null);
export const PostDispatchContext = createContext<React.Dispatch<DraftPostAction> | null>(null);

export function usePost() {
  return useContext(PostContext);
}

export function usePostDispatch() {
  return useContext(PostDispatchContext);
}

export enum DraftPostActionType {
  SAVE,
  REVIEW,
  CHANGE
}

export interface DraftPostAction {
  type: DraftPostActionType;
  newPost: Post;
  callback: () => void;
}

export function draftPostReducer(post: Post, action: DraftPostAction) {
  switch (action.type) {
    case DraftPostActionType.SAVE:
      console.log('Save called on PostReducer');
      createDraft(post.metadata);
      break;
    case DraftPostActionType.REVIEW:
      createDraft(post.metadata);
      action.callback();
      break;
    case DraftPostActionType.CHANGE:
      return action.newPost;
    default:
      throw Error('Unknown action: ' + action);
  }

  return post;
}
