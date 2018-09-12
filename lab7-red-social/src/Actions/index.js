import * as types from '../types';

export const addComment = (
    id, 
    comment,
) => ({
    type: types.COMMENT_ADDED,
    payload: {
        id,
        comment,
    }
});

export const karmaManaged = (
    id,
    qty
) => ({
    type: types.KARMA_MANAGED,
    payload: {
        id,
        qty
    }
});

export const addPost = (
    id,
    post
) => ({
    type: types.POST_ADDED,
    payload: {
        id,
        post
    }
})