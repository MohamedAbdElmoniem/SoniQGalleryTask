import {
  findImageById,
  generateCommentId,
  findImageIndexById,
  findCommentIndexById,
} from '../../src/utils/helpers';

describe('Helper Functions', () => {
  const images = [
    {id: '1', comments: [{id: 1}, {id: 2}]},
    {id: '2', comments: [{id: 3}]},
    {id: '3', comments: []},
  ];

  describe('findImageById', () => {
    test('should return the image with matching ID', () => {
      const imageId = '2';
      const result = findImageById(images, imageId);
      expect(result).toEqual({id: '2', comments: [{id: 3}]});
    });

    test('should return undefined when no matching ID is found', () => {
      const imageId = '4';
      const result = findImageById(images, imageId);
      expect(result).toBeUndefined();
    });
  });

  describe('generateCommentId', () => {
    test('should generate the next unique comment ID', () => {
      const comments = [{id: 1}, {id: 2}, {id: 3}];
      const result = generateCommentId(comments);
      expect(result).toBe(4);
    });

    test('should return 1 when no existing comments', () => {
      const comments = [];
      const result = generateCommentId(comments);
      expect(result).toBe(1);
    });
  });

  describe('findImageIndexById', () => {
    test('should return the index of the image with matching ID', () => {
      const imageId = '3';
      const result = findImageIndexById(images, imageId);
      expect(result).toBe(2);
    });

    test('should return -1 when no matching ID is found', () => {
      const imageId = '4';
      const result = findImageIndexById(images, imageId);
      expect(result).toBe(-1);
    });
  });

  describe('findCommentIndexById', () => {
    test('should return the index of the comment with matching ID', () => {
      const comments = [{id: 1}, {id: 2}, {id: 3}];
      const commentId = 2;
      const result = findCommentIndexById(comments, commentId);
      expect(result).toBe(1);
    });

    test('should return -1 when no matching ID is found', () => {
      const comments = [{id: 1}, {id: 2}, {id: 3}];
      const commentId = 4;
      const result = findCommentIndexById(comments, commentId);
      expect(result).toBe(-1);
    });
  });
});
