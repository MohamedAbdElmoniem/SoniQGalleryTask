import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CloseBtn} from '../../src/components';
import {Colors} from 'react-native/Libraries/NewAppScreen';

describe('CloseBtn', () => {
  it('calls onPress function when pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(<CloseBtn onPress={onPress} isDark={false} />);
    const pressable = getByTestId('close-btn-pressable');

    fireEvent.press(pressable);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders with light tintColor when isDark is false', () => {
    const {getByTestId} = render(
      <CloseBtn onPress={() => {}} isDark={false} />,
    );
    const closeImg = getByTestId('close-btn-img');

    expect(closeImg.props.style.tintColor).toBe(Colors.black);
  });

  it('renders with dark tintColor when isDark is true', () => {
    const {getByTestId} = render(<CloseBtn onPress={() => {}} isDark />);
    const closeImg = getByTestId('close-btn-img');

    expect(closeImg.props.style.tintColor).toBe(Colors.white);
  });
});
