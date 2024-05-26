import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {colors} from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  label?: string | React.ReactElement;
  secureTextEntry?: boolean;
  placeholder: string;
  value: any;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (
    text: string,
  ) => void | React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  isTextArea?: boolean;
  isPassword?: boolean;
  disabled?: boolean;
  maxLength?: number;
  showClearIcon?: boolean;
  clearField?: () => void;
  icon: any;
  style?: StyleProp<ViewStyle>;
}
const InputField: React.FC<Props> = ({
  label,
  placeholder,
  value,
  keyboardType,
  onChangeText,
  disabled = false,
  maxLength,
  error,
  icon,
  isTextArea,
  isPassword,
  showClearIcon,
  clearField,
  style,
  ...rest
}) => {
  const [secureEntry, setSecureEntry] = useState(true);
  return (
    <View style={tw`my-3`}>
      <View
        style={tw`flex flex-row bg-[${colors.whiteSmoke}] items-center px-3 ${
          disabled ? 'opacity-50' : ''
        }  rounded-lg`}>
        {icon ? <View style={tw`mr-1`}>{icon}</View> : <View />}
        <TextInput
          numberOfLines={isTextArea ? 5 : 1}
          textAlignVertical={isTextArea ? 'top' : 'center'}
          secureTextEntry={(label === 'Password' || isPassword) && secureEntry}
          placeholder={placeholder}
          placeholderTextColor={colors.textDark}
          autoCorrect={false}
          value={value}
          editable={!disabled}
          style={[
            tw`flex-1 text-[${colors.textDark}] ${
              Platform.OS === 'ios' ? 'h-13' : ''
            }`,
            style,
          ]}
          keyboardType={keyboardType ?? 'default'}
          onChangeText={onChangeText}
          maxLength={maxLength}
          {...rest}
        />
        {(label === 'Password' || isPassword) && (
          <Icon
            name={secureEntry ? 'eye' : 'eye-off'}
            size={20}
            color={colors.whiteSmoke}
            onPress={() => setSecureEntry(prev => !prev)}
          />
        )}
        {/* {showClearIcon && clearField ? (
          <SearchClear height={20} width={20} onPress={clearField} />
        ) : (
          <View />
        )} */}
      </View>
      {/* {error ? <InputFieldError error={error} /> : <View />} */}
    </View>
  );
};

export default InputField;
