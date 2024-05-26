import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {colors} from '../../theme/colors';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import tw from 'twrnc';
import {useDispatch, useSelector} from 'react-redux';
import {GOOGLE_AUTOCOMPLETE_OPTIONS} from '../../constants/keys';
import {setDestination, setOrigin} from '../../slices/userSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import {Portal} from 'react-native-paper';
import Switch from '../../assets/icons/switch.svg';

const AddressInput = () => {
  const dispatch = useDispatch();
  const originRef: any = useRef();
  const user = useSelector((state: any) => state.user);

  const styles = {
    description: {
      color: 'black',
      borderColor: 'black',
      fontFamily: 'Inter-Regular',
    },
    container: {
      flex: 0,
      marginTop: 5,
      position: 'absolute',
      zIndex: 2,
      width: '100%',
      left: 0,
    },
    textInputContainer: {
      height: 50,
      borderWidth: 1,
      borderColor: '#643F00',
      borderTopRightRadius: 2,
      borderTopLeftRadius: 2,
    },
    textInput: {
      fontFamily: 'Inter-Regular',
      fontSize: 15,
      color: colors.textDark,
      padding: 5,
      overflow: 'scroll',
    },
    listView: {
      paddingTop: 50,
    },
    row: {
      paddingLeft: 10,
      paddingVertical: 18,
      backgroundColor: '#FFE9E7',
    },
  };
  return (
    <Portal>
      <View style={tw`flex-row items-center p-5`}>
        <View style={tw`w-80`}>
          <View>
            <Text
              style={tw`text-[${colors.textDark}] text-sm mt--1.5 ml-3 bg-[#FFF8F7] self-start z-100`}>
              From
            </Text>
            <GooglePlacesAutocomplete
              isRowScrollable={true}
              ref={originRef}
              debounce={500}
              placeholder={
                user?.origin?.description || 'Select a starting location'
              }
              textInputProps={{
                placeholderTextColor: colors.textDark,
                fontWeight: '500',
                returnKeyType: 'search',
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              fetchDetails={true}
              query={GOOGLE_AUTOCOMPLETE_OPTIONS}
              onPress={(data, details: any = null) => {
                dispatch(
                  setOrigin({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    description: data.description,
                  }),
                );
              }}
              enablePoweredByContainer={false}
              styles={{...styles}}
              renderRightButton={() => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(setOrigin(null));
                    }}
                    style={tw`py-3 px-2`}>
                    <Icon
                      name="close-circle-outline"
                      size={20}
                      color={colors.black}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={tw`mt-8`}>
            <Text
              style={tw`text-[${colors.textDark}] text-sm mt--1.5 ml-3 bg-[#FFF8F7] self-start z-100`}>
              To
            </Text>
            <GooglePlacesAutocomplete
              isRowScrollable={true}
              ref={originRef}
              debounce={500}
              placeholder={
                user?.destination?.description || 'Select a starting location'
              }
              textInputProps={{
                placeholderTextColor: colors.textDark,
                fontWeight: '500',
                returnKeyType: 'search',
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              fetchDetails={true}
              query={GOOGLE_AUTOCOMPLETE_OPTIONS}
              onPress={(data, details: any = null) => {
                dispatch(
                  setDestination({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    description: data.description,
                  }),
                );
              }}
              enablePoweredByContainer={false}
              styles={{
                ...styles,
                //   container: {...styles.container, marginTop: 50},
                listView: {...styles.listView, paddingTop: 10},
              }}
              renderRightButton={() => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(setDestination(null));
                    }}
                    style={tw`py-3 px-2`}>
                    <Icon
                      name="close-circle-outline"
                      size={20}
                      color={colors.black}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <Switch height={30} width={30} style={tw`mt-10 ml-2`} />
      </View>
    </Portal>
  );
};

export default AddressInput;
