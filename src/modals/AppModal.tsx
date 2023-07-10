import React from 'react';
import {AppSafeArea} from '../components';
import Modal from 'react-native-modal';
import {StyleSheet} from 'react-native';

type AppModalProps = {
  isDark?: boolean;
  children: React.ReactNode;
  isVisible: boolean;
};

const AppModal: React.FC<AppModalProps> = ({
  isDark = false,
  children,
  isVisible,
}) => {
  return (
    <Modal style={styles.wrapper} isVisible={isVisible} testID="modal">
      <AppSafeArea testID="appSafeArea" isDark={isDark}>
        {children}
      </AppSafeArea>
    </Modal>
  );
};

const styles = StyleSheet.create({wrapper: {margin: 0}});

export default AppModal;
