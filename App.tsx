import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import AppNavigation from './src/navigation/AppNavigation';
import {AppColors} from './src/utils';
import {WelcomeScreen} from './src/screens';

// import {WelcomeScreen} from './src/screens';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={AppColors.TRANSPARENT}
      />
      {/* <WelcomeScreen /> */}
      <AppNavigation />
    </>
  );
};

export default App;
