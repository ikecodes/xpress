import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {colors} from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckBox = ({
  checked,
  onChecked,
  label,
}: {
  checked: boolean;
  onChecked: () => void;
  label?: string;
}) => {
  return (
    <View style={tw`my-3 flex-row items-center`}>
      <TouchableOpacity
        onPress={onChecked}
        style={tw`h-6 w-6 items-center justify-center border-[1px] border-[${
          checked ? colors.primaryLight : '#DDDDDD'
        }] ${checked ? `bg-[${colors.primaryLight}]` : ''} rounded-full`}>
        {checked ? (
          <Icon name="checkmark" color={colors.white} size={20} />
        ) : (
          <View />
        )}
      </TouchableOpacity>

      {label ? (
        <Text style={tw`ml-2 text-[${colors.black}]`}>{label}</Text>
      ) : (
        <View />
      )}
    </View>
  );
};

export default CheckBox;
