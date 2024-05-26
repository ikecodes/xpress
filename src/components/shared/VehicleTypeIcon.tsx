import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {colors} from '../../theme/colors';

const VehicleTypeIcon = ({icon, name}: {icon: any; name: string}) => {
  //   return console.log('ICON', icon);
  return (
    <View
      style={tw`flex-row items-center gap-1 border-[1px] border-[${colors.whiteSmoke}] rounded-lg px-3 py-2`}>
      <View>{icon}</View>
      <Text style={tw`text-[${colors.black}]`}>{name}</Text>
    </View>
  );
};
export default VehicleTypeIcon;
