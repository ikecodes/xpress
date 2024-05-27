import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Logo from '../../assets/icons/logo.svg';
import Back from '../../assets/icons/back.svg';
import More from '../../assets/icons/more.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../theme/colors';

const PageHeader = ({title}: {title: string}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View
      style={tw`h-30 justify-between items-center flex-row bg-white px-3 border-b-[0.5px]  border-[${colors.primaryLight}]`}>
      <Back height={40} width={40} onPress={() => navigation.goBack()} />
      <View style={tw`flex-row items-center gap-1`}>
        <Logo height={50} width={50} />
        <Text style={tw`font-bold text-black text-xl`}>{title}</Text>
      </View>
      <More height={20} width={20} />
    </View>
  );
};

export default PageHeader;
