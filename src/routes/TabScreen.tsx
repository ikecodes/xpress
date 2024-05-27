import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {dashboardRouteStack} from '../constants/screens';
import TripsActive from '../assets/icons/trips-active.svg';
import TripsInactive from '../assets/icons/trips-inactive.svg';
import TicketsActive from '../assets/icons/tickets-active.svg';
import TicketsInactive from '../assets/icons/tickets-inactive.svg';
import WalletActive from '../assets/icons/wallet-active.svg';
import WalletInactive from '../assets/icons/wallet-inactive.svg';
import AccountActive from '../assets/icons/account-active.svg';
import AccountInactive from '../assets/icons/account-inactive.svg';
import {colors} from '../theme/colors';
import Trips from '../screens/Trips';
import Tickets from '../screens/Tickets';
import Wallet from '../screens/Wallet';
import Account from '../screens/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import Home from '../screens/Home';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Tab.Navigator
      initialRouteName={dashboardRouteStack.Home}
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === dashboardRouteStack.Trips) {
            iconName = 'home';
            if (focused) {
              return <TripsActive height={20} width={20} />;
            } else {
              return <TripsInactive height={20} width={20} />;
            }
          } else if (route.name === dashboardRouteStack.Tickets) {
            iconName = 'person';
            if (focused) {
              return <TicketsActive height={20} width={20} />;
            } else {
              return <TicketsInactive height={20} width={20} />;
            }
          } else if (route.name === dashboardRouteStack.Wallet) {
            if (focused) {
              return <WalletActive height={20} width={20} />;
            } else {
              return <WalletInactive height={20} width={20} />;
            }
          } else if (route.name === dashboardRouteStack.Account) {
            if (focused) {
              return <AccountActive height={20} width={20} />;
            } else {
              return <AccountInactive height={20} width={20} />;
            }
          }
          return iconName && <Icon name={iconName} size={20} color={color} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.primaryLight,
        tabBarInactiveTintColor: colors.textDark,
        tabBarStyle: {
          backgroundColor: '#FDFDFD',
          paddingBottom: 20,
          paddingTop: 10,
          paddingHorizontal: 20,
          height: 80,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 13,
        },
      })}>
      <Tab.Screen
        name={dashboardRouteStack.Trips}
        component={Trips}
        options={{
          title: dashboardRouteStack.Trips,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={dashboardRouteStack.Tickets}
        component={Tickets}
        options={{
          title: `${dashboardRouteStack.Tickets}`,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={dashboardRouteStack.Home}
        component={Home}
        options={() => ({
          title: dashboardRouteStack.Home,
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(dashboardRouteStack.Home);
              }}
              style={tw`bg-[${colors.primaryLight}] w-18 h-8 rounded-full items-center justify-center`}>
              <Icon size={30} name="add" color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name={dashboardRouteStack.Wallet}
        component={Wallet}
        options={{
          title: `${dashboardRouteStack.Wallet}`,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={dashboardRouteStack.Account}
        component={Account}
        options={{
          title: dashboardRouteStack.Account,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
