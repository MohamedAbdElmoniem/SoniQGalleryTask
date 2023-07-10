import {CommentState, ImageState} from '../redux/Slices/GallerySlice';

const findImageById = (images: ImageState[], imageId: string) => {
  return images.find(img => img.id === imageId);
};

const generateCommentId = (comments: CommentState[]) => {
  const currentCommentsLength = comments?.length || 0;
  return !currentCommentsLength
    ? 1
    : ((comments && comments[currentCommentsLength - 1].id) || 0) + 1;
};

const findImageIndexById = (images: ImageState[], imageId: string) => {
  return images.findIndex(img => img.id === imageId);
};

const findCommentIndexById = (comments: CommentState[], commentId: number) => {
  return comments.findIndex(com => com.id === commentId);
};

export {
  findImageById,
  generateCommentId,
  findImageIndexById,
  findCommentIndexById,
};
