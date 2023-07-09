import styled from 'styled-components/native';
import {Colors} from '../../theme';

const CommentInput = styled.TextInput`
  padding-horizontal: 16px;
  border-radius: 8px;
  border: 1px solid black;
  height: 60px;
  color: ${Colors.brown};
  width: 100%;
  margin-right: 20px;
`;

export default CommentInput;
