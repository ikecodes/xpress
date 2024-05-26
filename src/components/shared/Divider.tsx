import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {colors} from '../../theme/colors';
const Divider = ({
  height,
  width,
  color,
  vertical,
}: {
  height?: number | string;
  width?: number | string;
  color?: string;
  vertical?: boolean;
}) => {
  return (
    <>
      {vertical ? (
        <View
          style={tw`w-[${width ? width : '1.5px'}] h-[${
            height ? height : '5'
          }] bg-[${color ? color : colors.grayPrimary}]`}
        />
      ) : (
        <View
          style={tw`h-[${height ? height : '0.3'}] w-[100%] bg-[${
            color ? color : colors.grayPrimary
          }]`}
        />
      )}
    </>
  );
};

export default Divider;
