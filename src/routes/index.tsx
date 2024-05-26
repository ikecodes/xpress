import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';
import ProtectedRoute from './Protected.routes';
import tw from 'twrnc';
import AuthRoute from './Auth.routes';
import {colors} from '../theme/colors';
export function Navigation() {
  const user = useSelector((state: any) => state.user);
  return (
    <View style={tw`flex-1`}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <SafeAreaView />
      {user?.isLoggedIn ? <ProtectedRoute /> : <AuthRoute />}
    </View>
  );
}
