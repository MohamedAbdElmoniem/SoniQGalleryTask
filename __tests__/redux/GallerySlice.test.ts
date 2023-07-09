import GalleryReducer, {
  saveImages,
  addComment,
  deleteComment,
} from '../../src/redux/Slices/GallerySlice';

describe('GallerySlice reducer', () => {
  const initialState = {
    images: [],
  };

  const galleryImage = {
    id: 1,
    url: 'https://test.com/test.jpg',
    comments: [],
  };

  it('should handle saveImages', () => {
    const images = [galleryImage];
    const newState = GalleryReducer(initialState, saveImages(images));
    expect(newState.images).toEqual([{...galleryImage, comments: []}]);
  });

  it('should handle addComment', () => {
    const images = [galleryImage];
    const newState = GalleryReducer(initialState, saveImages(images));

    const comment = {
      imageId: 1,
      comment: 'comment',
    };

    const newStateV2 = GalleryReducer(newState, addComment(comment));

    expect(newStateV2.images[0]?.comments).toEqual([
      {
        text: 'comment',
        dateTime: expect.any(String),
        id: 1,
      },
    ]);
  });

  it('should handle deleteComment', () => {
    const comment = {
      imageId: 1,
      commentId: 1,
    };

    const state = {
      images: [
        {
          ...galleryImage,
          comments: [
            {text: 'Comment 1', dateTime: '2023-07-09T10:30:00', id: 1},
            {text: 'Comment 2', dateTime: '2023-07-09T11:00:00', id: 2},
          ],
        },
      ],
    };

    const newState = GalleryReducer(state, deleteComment(comment));

    expect(newState.images[0].comments).toEqual([
      {text: 'Comment 2', dateTime: '2023-07-09T11:00:00', id: 2},
    ]);
  });
});
