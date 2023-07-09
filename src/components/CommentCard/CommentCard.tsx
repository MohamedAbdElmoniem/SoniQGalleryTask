import React from 'react';
import styled from 'styled-components/native';
import {Colors, Icons} from '../../theme';
import Row from '../Row/Row';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {CommentState} from '../../redux/Slices/GallerySlice';

const StyledCommentCard = styled.View`
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  margin-vertical: 10px;
  padding: 12px;
`;

type CommentCardProps = {
  item: CommentState;
  onEditComment: (com: CommentState) => void;
  onDeleteComment: (com: CommentState) => void;
};

const CommentCard = ({
  item,
  onDeleteComment,
  onEditComment,
}: CommentCardProps) => {
  return (
    <StyledCommentCard>
      <Row>
        <View>
          <Text style={styles.comment}>{item.text}</Text>
          <View style={styles.spacer} />
          <Text style={styles.dateTimeText}>
            {moment(item.dateTime).format('DD-MM-YYYY hh:mm A')}
          </Text>
        </View>
        <View>
          <Pressable testID="edit-icon" onPress={() => onEditComment(item)}>
            <Image source={Icons.edit} style={styles.icon} />
          </Pressable>
          <View style={styles.spacer} />
          <Pressable testID="delete-icon" onPress={() => onDeleteComment(item)}>
            <Image source={Icons.delete} style={styles.icon} />
          </Pressable>
        </View>
      </Row>
    </StyledCommentCard>
  );
};

const styles = StyleSheet.create({
  dateTimeText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 4,
    color: Colors.brown,
  },
  comment: {fontSize: 18, color: Colors.brown},
  spacer: {height: 40},
  icon: {width: 20, height: 20},
});

export default CommentCard;
