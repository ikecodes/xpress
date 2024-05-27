import {View, Text, Pressable} from 'react-native';
import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import tw from 'twrnc';
import Settings from '../assets/icons/settings.svg';
import Support from '../assets/icons/support.svg';
import Feedback from '../assets/icons/feedback.svg';
import Notifications from '../assets/icons/notification.svg';
import Signout from '../assets/icons/signout.svg';
import {colors} from '../theme/colors';
import {useDispatch} from 'react-redux';
import {setUser} from '../slices/userSlice';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const Account = () => {
  const dispatch = useDispatch();
  const size = 20;
  const allSettings = [
    {
      icon: <Settings height={size} width={size} />,
      name: 'Settings',
      onPress: () => {},
    },
    {
      icon: <Support height={size} width={size} />,
      name: 'Support',
      onPress: () => {},
    },
    {
      icon: <Feedback height={size} width={size} />,
      name: 'Provide feedback',
      onPress: () => {},
    },
    {
      icon: <Notifications height={size} width={size} />,
      name: 'Notifications',
      onPress: () => {},
    },
    {
      icon: <Signout height={size} width={size} />,
      name: 'Signout',
      onPress: () => {
        dispatch(setUser({isLoggedIn: false}));
      },
    },
  ];
  return (
    <View style={tw`flex-1 bg-white`}>
      <PageHeader title={'Settings'} />
      <View>
        {allSettings.map((type, i) => {
          return (
            <Pressable
              key={i}
              style={tw`flex-row items-center justify-between border-b-[0.5px] py-5 px-5  border-[${colors.primaryLight}]`}>
              <View style={tw`flex-row gap-3`}>
                <View>{type.icon}</View>
                <Text style={tw`text-black`}>{type.name}</Text>
              </View>
              <MIcon
                size={size - 5}
                name="arrow-forward-ios"
                color={colors.black}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Account;
