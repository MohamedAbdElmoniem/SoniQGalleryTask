import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import {AppModal} from '../../src/modals';

describe('AppModal', () => {
  const mockChildren = <Text>Mock Children</Text>;

  test('renders modal when isVisible is true', () => {
    const {getByTestId} = render(
      <AppModal isVisible={true}>{mockChildren}</AppModal>,
    );
    const modal = getByTestId('modal');
    expect(modal).toBeTruthy();
  });

  test('does not render modal when isVisible is false', () => {
    const {queryByTestId} = render(
      <AppModal isVisible={false}>{mockChildren}</AppModal>,
    );
    const modal = queryByTestId('modal');
    expect(modal?.props.visible).toBe(false);
  });

  test('renders children inside AppSafeArea', () => {
    const {getByText} = render(
      <AppModal isVisible={true}>{mockChildren}</AppModal>,
    );
    const children = getByText('Mock Children');
    expect(children).toBeTruthy();
  });

  test('sets default isDark prop to false', () => {
    const {getByTestId} = render(
      <AppModal isVisible={true}>{mockChildren}</AppModal>,
    );
    const appSafeArea = getByTestId('appSafeArea');
    expect(appSafeArea.props.isDark).toBe(false);
  });

  test('sets isDark prop correctly', () => {
    const {getByTestId} = render(
      <AppModal isVisible={true} isDark={true}>
        {mockChildren}
      </AppModal>,
    );
    const appSafeArea = getByTestId('appSafeArea');
    expect(appSafeArea.props.isDark).toBe(true);
  });
});
