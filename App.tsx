import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import AppNavigation from './src/navigation/AppNavigation';
import {AppColors} from './src/utils';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            translucent
            barStyle={'light-content'}
            backgroundColor={AppColors.TRANSPARENT}
          />
          <AppNavigation />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
