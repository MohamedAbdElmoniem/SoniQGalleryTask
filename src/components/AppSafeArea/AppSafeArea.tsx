import styled from 'styled-components/native';
import {Colors} from '../../theme';

type AppSafeAreaProps = {
  isDark?: boolean;
};

const AppSafeArea = styled.SafeAreaView<AppSafeAreaProps>`
  flex: 1;
  background-color: ${props => (props.isDark ? Colors.black : Colors.white)};
`;

export default AppSafeArea;
