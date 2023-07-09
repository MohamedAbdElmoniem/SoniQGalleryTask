import React from 'react';
import {render} from '@testing-library/react-native';
import {AppView} from '../../src/components';

describe('AppView', () => {
  it('renders with correct styles', () => {
    const {getByTestId} = render(<AppView testID="app-view" />);
    const appView = getByTestId('app-view');

    expect(appView.props.style.paddingHorizontal).toBe(16);
    expect(appView.props.style.height).toBe('100%');
  });
});
