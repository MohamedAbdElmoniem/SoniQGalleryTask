import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppModal from './AppModal';
import {GalleryImageModel} from '../@types/GalleryImageModel';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {CloseBtn, CommentCard, CommentInput, Row} from '../components';
import {Colors, Icons} from '../theme';
import {
  CommentState,
  addComment,
  deleteComment,
  updateComment,
} from '../redux/Slices/GallerySlice';
import EditCommentModal from './EditCommentModal';

type CommentsModalProps = {
  image: GalleryImageModel;
  onClose: () => void;
  isVisible: boolean;
};

const CommentsModal: React.FC<CommentsModalProps> = ({
  image,
  onClose,
  isVisible,
}) => {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState<string>('');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedComment, setSelectedComment] = useState<CommentState>({});
  const images = useAppSelector(state => state?.gallery?.images);
  const comments = images?.find(img => img?.id === image?.id)?.comments;

  const onAddComment = () => {
    const formattedComment = comment.trim();
    formattedComment &&
      dispatch(addComment({imageId: image?.id, comment: formattedComment}));
    setComment('');
  };

  const onEditComment = (com: CommentState) => {
    setShowEditModal(true);
    setSelectedComment(com);
  };

  const onDeleteComment = (com: CommentState) => {
    dispatch(deleteComment({imageId: image?.id, commentId: com?.id}));
  };

  return (
    <AppModal isVisible={isVisible}>
      <View style={styles.contentWrapper}>
        <CloseBtn onPress={onClose} />
        <Row style={styles.topSection}>
          <View style={styles.commentInputWrapper}>
            <CommentInput
              placeholder="Add comment..."
              onChangeText={setComment}
              value={comment}
            />
          </View>
          <Pressable onPress={onAddComment}>
            <Image source={Icons.send} style={styles.sendImg} />
          </Pressable>
        </Row>
        <FlatList
          data={[...(comments || [])].reverse()}
          contentContainerStyle={styles.commentsList}
          renderItem={({item, index}) => {
            return (
              <CommentCard
                key={index}
                item={item}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
              />
            );
          }}
          ListEmptyComponent={
            <Text style={styles.noCommentsText}>No comments yet</Text>
          }
        />
      </View>
      <EditCommentModal
        isVisible={showEditModal}
        selectedComment={selectedComment}
        onCancel={() => setShowEditModal(false)}
        onEditComment={com => {
          setShowEditModal(false);
          dispatch(updateComment({...com, imageId: image?.id}));
        }}
      />
    </AppModal>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {paddingHorizontal: 15},
  dateTimeText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 4,
    color: Colors.brown,
  },
  sendImg: {width: 28, height: 28, tintColor: Colors.black},
  commentsList: {marginTop: 20},
  topSection: {
    marginTop: 30,
  },
  comment: {fontSize: 18, color: Colors.brown},
  noCommentsText: {textAlign: 'center', fontSize: 18},
  commentInputWrapper: {flex: 0.92},
});

export default CommentsModal;
