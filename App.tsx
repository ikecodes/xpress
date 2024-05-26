/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/slices';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/routes';
import SplashScreen from 'react-native-splash-screen';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {colors} from './src/theme/colors';
import {MenuProvider} from 'react-native-popup-menu';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primaryLight,
  },
};
function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <KeyboardAvoidingView
                  style={{flex: 1}}
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                  <Navigation />
                </KeyboardAvoidingView>
              </PersistGate>
            </Provider>
          </PaperProvider>
        </NavigationContainer>
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;
