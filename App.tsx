import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Gallery} from './src/screens';
import {AppSafeArea} from './src/components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={styles.wrapper}>
          <AppSafeArea>
            <Gallery />
          </AppSafeArea>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({wrapper: {flex: 1}});
