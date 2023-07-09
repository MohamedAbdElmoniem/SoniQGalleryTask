import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CommentCard} from '../../src/components';

describe('CommentCard', () => {
  const comment = {
    id: 1,
    text: 'comment',
    dateTime: '2023-07-09T10:30:00',
  };

  it('renders comment text and formatted date correctly', () => {
    const {getByText} = render(
      <CommentCard
        item={comment}
        onEditComment={() => {}}
        onDeleteComment={() => {}}
      />,
    );

    const commentText = getByText('comment');
    const dateTimeText = getByText('09-07-2023 10:30 AM');

    expect(commentText).toBeTruthy();
    expect(dateTimeText).toBeTruthy();
  });

  it('calls onEditComment function when edit icon is pressed', () => {
    const onEditComment = jest.fn();
    const {getByTestId} = render(
      <CommentCard
        item={comment}
        onEditComment={onEditComment}
        onDeleteComment={() => {}}
      />,
    );
    const editIcon = getByTestId('edit-icon');

    fireEvent.press(editIcon);

    expect(onEditComment).toHaveBeenCalledWith(comment);
  });

  it('calls onDeleteComment function when delete icon is pressed', () => {
    const onDeleteComment = jest.fn();
    const {getByTestId} = render(
      <CommentCard
        item={comment}
        onEditComment={() => {}}
        onDeleteComment={onDeleteComment}
      />,
    );
    const deleteIcon = getByTestId('delete-icon');

    fireEvent.press(deleteIcon);

    expect(onDeleteComment).toHaveBeenCalledWith(comment);
  });
});
