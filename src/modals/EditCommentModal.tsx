import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {CommentState} from '../redux/Slices/GallerySlice';
import {CommentInput, Row} from '../components';
import {Colors} from '../theme';

type EditCommentModalProps = {
  selectedComment: CommentState;
  onCancel: () => void;
  isVisible: boolean;
  onEditComment: (com: CommentState) => void;
};

export default function EditCommentModal({
  selectedComment,
  onCancel,
  isVisible,
  onEditComment,
}: EditCommentModalProps) {
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    setComment(selectedComment?.text || '');
  }, [selectedComment]);

  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <View style={styles.centerModal}>
        <View style={styles.mainModalWrapper}>
          <Text style={styles.title}>Edit Comment</Text>
          <CommentInput value={comment} onChangeText={setComment} />
          <Row>
            <Pressable onPress={onCancel} style={styles.cancel}>
              <Text style={styles.cancelTxt}>Cancel</Text>
            </Pressable>
            <Pressable
              style={styles.save}
              onPress={() => {
                const formattedComment = comment.trim();
                formattedComment &&
                  onEditComment({...selectedComment, text: formattedComment});
              }}>
              <Text style={styles.saveTxt}>Save</Text>
            </Pressable>
          </Row>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  centerModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainModalWrapper: {
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').height / 4,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
  },
  title: {marginBottom: 10, fontSize: 17},
  cancel: {
    backgroundColor: Colors.lightGray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  save: {
    backgroundColor: Colors.brown,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cancelTxt: {fontSize: 17},
  saveTxt: {color: Colors.white, fontSize: 17},
});
