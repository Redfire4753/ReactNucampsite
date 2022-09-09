import {COMMENTS} from '../../app/shared/COMMENTS';
import { createSlice } from 'react-redux';

const initialState = {
    commentsArray: COMMENTS
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter(comment => comment.campsiteId === parseInt(campsiteId));
};