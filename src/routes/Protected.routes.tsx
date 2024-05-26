import {KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {dashboardRouteStack} from '../constants/screens';
import TabScreen from './TabScreen';
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();

const ProtectedRoute = () => {
  const routes = [
    {
      name: dashboardRouteStack.Home,
      component: Home,
    },
  ];
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
        {/* {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              headerShown: false,
            }}
          />
        ))} */}
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default ProtectedRoute;
