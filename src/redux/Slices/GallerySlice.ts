import {createSlice} from '@reduxjs/toolkit';
import {GalleryImageModel} from '../../@types/GalleryImageModel';
import moment from 'moment';
import {
  findCommentIndexById,
  findImageById,
  findImageIndexById,
  generateCommentId,
} from '../../utils/helpers';

export interface CommentState {
  id?: number;
  text?: string;
  dateTime?: string;
}

export interface ImageState extends GalleryImageModel {
  comments: Array<CommentState>;
}

interface GalleryState {
  images: Array<ImageState>;
}

const initialState: GalleryState = {
  images: [],
};

export const GallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    saveImages: (state, {payload}) => {
      state.images = payload;
      state.images = state.images.map(image => ({...image, comments: []}));
    },
    addComment: (state, {payload}) => {
      const image = findImageById(state.images, payload.imageId);
      const comments = image?.comments;

      comments?.push({
        text: payload.comment,
        dateTime: moment().toISOString(),
        id: generateCommentId(comments),
      });

      state.images = [...state.images];
    },
    deleteComment: (state, {payload}) => {
      const imageIndex = findImageIndexById(state.images, payload.imageId);

      state.images[imageIndex].comments = state.images[
        imageIndex
      ].comments.filter(comment => comment.id !== payload.commentId);
    },
    updateComment: (state, {payload}) => {
      const imageIndex = findImageIndexById(state.images, payload.imageId);
      const commentIndex = findCommentIndexById(
        state.images[imageIndex].comments,
        payload.id,
      );

      state.images[imageIndex].comments[commentIndex] = {...payload};
    },
  },
});

export const {saveImages, addComment, deleteComment, updateComment} =
  GallerySlice.actions;

export default GallerySlice.reducer;
