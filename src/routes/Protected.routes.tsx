import {KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {dashboardRouteStack} from '../constants/screens';
import TabScreen from './TabScreen';
const Stack = createNativeStackNavigator();

const ProtectedRoute = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Stack.Navigator initialRouteName={dashboardRouteStack.Dashboard}>
        <Stack.Screen
          name={dashboardRouteStack.Dashboard}
          component={TabScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default ProtectedRoute;
