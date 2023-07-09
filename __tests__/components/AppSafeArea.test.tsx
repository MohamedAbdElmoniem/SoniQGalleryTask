import React from 'react';
import {render} from '@testing-library/react-native';
import {Colors} from '../../src/theme';
import {AppSafeArea} from '../../src/components';

describe('AppSafeArea', () => {
  it('renders with light background when isDark is false', () => {
    const {getByTestId} = render(<AppSafeArea testID="app-safe-area" />);
    const appSafeArea = getByTestId('app-safe-area');

    expect(appSafeArea.props.style.backgroundColor).toBe(Colors.white);
  });

  it('renders with dark background when isDark is true', () => {
    const {getByTestId} = render(<AppSafeArea isDark testID="app-safe-area" />);
    const appSafeArea = getByTestId('app-safe-area');

    expect(appSafeArea.props.style.backgroundColor).toBe(Colors.black);
  });
});
