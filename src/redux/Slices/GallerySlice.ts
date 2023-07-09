import {createSlice} from '@reduxjs/toolkit';
import {GalleryImageModel} from '../../@types/GalleryImageModel';
import moment from 'moment';

export interface CommentState {
  id?: number;
  text?: string;
  dateTime?: string;
}

interface ImageState extends GalleryImageModel {
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
      const currentComments = state.images.find(
        img => img.id === payload.imageId,
      )?.comments;
      const currentCommentsLength = currentComments?.length || 0;
      currentComments?.push({
        text: payload.comment,
        dateTime: moment().toISOString(),
        id: !currentCommentsLength
          ? 1
          : ((currentComments &&
              currentComments[currentCommentsLength - 1].id) ||
              0) + 1,
      });
      state.images = [...state.images];
    },
    deleteComment: (state, {payload}) => {
      const imageIndex = state.images.findIndex(
        img => img.id === payload.imageId,
      );

      state.images[imageIndex].comments = state.images[
        imageIndex
      ].comments.filter(comment => comment.id !== payload.commentId);
    },
    updateComment: (state, {payload}) => {
      const imageIndex = state.images.findIndex(
        img => img.id === payload.imageId,
      );

      const commentIndex = state.images[imageIndex].comments.findIndex(
        com => com.id === payload.id,
      );

      state.images[imageIndex].comments[commentIndex] = {...payload};
    },
  },
});

export const {saveImages, addComment, deleteComment, updateComment} =
  GallerySlice.actions;

export default GallerySlice.reducer;
