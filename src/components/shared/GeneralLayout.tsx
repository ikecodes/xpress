import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {colors} from '../../theme/colors';

const GeneralLayout: React.FC<{
  childrenNoPadding?: JSX.Element;
  children?: JSX.Element | JSX.Element[] | null;
  style?: StyleProp<ViewStyle>;
}> = ({childrenNoPadding, children, style}) => {
  return (
    <View style={[Styles.safeArea]}>
      <View>{childrenNoPadding}</View>
      <View style={[Styles.withPadding, style]}>{children}</View>
    </View>
  );
};

export default GeneralLayout;

const Styles = StyleSheet.create({
  withPadding: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  safeArea: {
    height: '100%',
    flex: 1,
  },
});
