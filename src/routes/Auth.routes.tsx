import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {onboardingRouteStack} from '../constants/screens';
import SignIn from '../screens/auth/SignIn';
import {KeyboardAvoidingView} from 'react-native';
import Initial from '../screens/auth/Initial';
import Register from '../screens/auth/Register';
import EnterAddress from '../screens/auth/EnterAddress';
import EnterLocation from '../screens/auth/EnterLocation';

const Stack = createNativeStackNavigator();
/**
 *
 * @returns Returns all the authentication routes here
 * We are adding all the auth routes here
 */
function AuthRoute() {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Stack.Navigator initialRouteName={onboardingRouteStack.Initial}>
        <Stack.Screen
          name={onboardingRouteStack.Initial}
          component={Initial}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={onboardingRouteStack.SignIn}
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={onboardingRouteStack.Register}
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={onboardingRouteStack.EnterAddress}
          component={EnterAddress}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={onboardingRouteStack.EnterLocation}
          component={EnterLocation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
}

export default AuthRoute;
