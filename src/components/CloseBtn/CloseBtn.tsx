import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Colors, Icons} from '../../theme';

type CloseBtnProps = {
  onPress: () => void;
  isDark?: boolean;
};

export default function CloseBtn({onPress, isDark}: CloseBtnProps) {
  return (
    <Pressable onPress={onPress} hitSlop={20} testID="close-btn-pressable">
      <Image
        source={Icons.close}
        style={styles.closeImg(isDark)}
        testID="close-btn-img"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create<any>({
  closeImg: (isDark: boolean) => ({
    width: 22,
    height: 22,
    alignSelf: 'flex-end',
    tintColor: isDark ? Colors.white : Colors.black,
  }),
});
