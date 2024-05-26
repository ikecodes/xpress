import React from 'react';
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import {colors} from '../../theme/colors';
import tw from 'twrnc';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  bgColor?: string;
  color?: string;
  text: string;
  outlineColor?: string;
  isDisabled?: boolean;
  icon?: any;
  onPress: () => void;
  loading?: boolean;
  outline?: boolean;
  bottomSticky?: boolean;
  bodyStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
}
const PrimaryButton: React.FC<Props> = ({
  bgColor = colors.primaryLight,
  color = colors.white,
  text,
  isDisabled,
  icon,
  onPress = () => {},
  loading,
  outline,
  outlineColor,
  bottomSticky,
  bodyStyle,
  textStyle,
}) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Pressable
      onPress={() => {
        if (loading) return;
        onPress();
      }}
      disabled={isDisabled}
      style={[
        tw`rounded-lg justify-center`,
        {
          backgroundColor: outline
            ? color
            : isDisabled || !bgColor
            ? colors.grayPrimary
            : bgColor
            ? bgColor
            : colors.primaryLight,
          borderColor: outline ? bgColor : colors.primaryLight,
          borderWidth: outline ? 1 : 0,
          marginTop: bottomSticky ? 'auto' : 0,
          marginBottom: bottomSticky
            ? Platform.OS === 'ios'
              ? bottom
              : 35
            : 0,
          height: 50,
        },
        bodyStyle,
      ]}>
      {loading ? (
        <View>
          <ActivityIndicator
            size="small"
            color={outline ? colors.primaryLight : color}
            style={tw`text-center`}
          />
        </View>
      ) : (
        <View style={tw`flex flex-row items-center justify-center`}>
          {icon}
          <Text
            style={[
              tw`text-center text-[${colors.white}]`,
              {
                color: outline
                  ? outlineColor ?? colors.primaryLight
                  : isDisabled
                  ? '#1D1B20'
                  : color,
              },
              textStyle,
            ]}>
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default PrimaryButton;
