import React, {useMemo} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import tw from 'twrnc';
import {colors} from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Option = ({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
  isLast: boolean;
}) => {
  return (
    <View
      style={tw`flex-row  items-center justify-between pb-3 pt-1 px-2 ${
        isActive ? 'bg-[#F6DDDA]' : ''
      }`}>
      <Text style={tw`text-[#261817] font-medium`}>{name}</Text>
    </View>
  );
};

interface Props {
  options: {label: string; value: string}[];
  onChange: ({value}: {value: any}) => void;
  placeholder?: string;
  label: string;
  value: any;
  disabled?: boolean;
}
const DropdownMenu: React.FC<Props> = ({
  options = [],
  onChange = () => {},
  placeholder = 'Select options',
  label,
  value,
  disabled,
}) => {
  const size = 20;
  const selectedOption = useMemo(() => {
    return options.find(val => `${val?.value}` === `${value}`);
  }, [value, options]);
  return (
    <View style={tw`my-3`}>
      {!!label && (
        <Text
          style={tw`text-[${colors.textDark}] text-sm mb--2 ml-3 bg-[#FFF8F7] self-start z-100`}>
          {label}
        </Text>
      )}
      <Menu
        style={tw`flex flex-row items-center ${
          !selectedOption?.label ? `bg-[${colors.whiteSmoke}]` : 'border-[1px]'
        }  px-3 py-3.5  rounded-lg`}>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              width: '90%',
              maxHeight: 600,
              backgroundColor: '#FFE9E7',
            },
          }}>
          <ScrollView>
            {options.map((option, i) => {
              return (
                <MenuOption
                  key={option.value}
                  onSelect={() => onChange({value: option.value})}>
                  <Option
                    name={option.label}
                    isActive={value === option.value}
                    isLast={i === options.length - 1}
                  />
                </MenuOption>
              );
            })}
          </ScrollView>
        </MenuOptions>
        <MenuTrigger disabled={disabled}>
          <View style={tw`flex-row justify-between w-[100%] items-center`}>
            <Text style={[tw`${`text-[${colors.textDark}]`}`]}>
              {selectedOption?.label || placeholder}
            </Text>
            {selectedOption?.label ? (
              <Icon size={size} name="close-circle-outline" />
            ) : (
              <>
                {disabled ? (
                  <View />
                ) : (
                  <Icon size={size} name="arrow-forward" />
                )}
              </>
            )}
          </View>
        </MenuTrigger>
      </Menu>
    </View>
  );
};

export default React.memo(DropdownMenu);
