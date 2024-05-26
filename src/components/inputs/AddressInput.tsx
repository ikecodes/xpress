import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {colors} from '../../theme/colors';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import tw from 'twrnc';
import {useDispatch, useSelector} from 'react-redux';
import {GOOGLE_AUTOCOMPLETE_OPTIONS} from '../../constants/keys';
import {setUser} from '../../slices/userSlice';
import Icon from 'react-native-vector-icons/Ionicons';

const AddressInput = () => {
  const dispatch = useDispatch();
  const originRef: any = useRef();
  const user = useSelector((state: any) => state.user);
  return (
    <View>
      <View style={tw`relative z-10`}>
        <Text
          style={tw`text-[${colors.textDark}] text-sm mt--1.5 ml-3 bg-[#FFF8F7] self-start z-100`}>
          Start location
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
              setUser({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                description: data.description,
              }),
            );
          }}
          enablePoweredByContainer={false}
          styles={{
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
              backgroundColor: colors.whiteSmoke,
              height: 50,
            },
            textInput: {
              fontFamily: 'Inter-Regular',
              backgroundColor: colors.whiteSmoke,
              borderRadius: 0,
              fontSize: 15,
              color: colors.textDark,
              padding: 5,
              overflow: 'scroll',
            },

            listView: {
              paddingTop: 10,
            },
            row: {
              paddingLeft: 10,
              paddingVertical: 18,
              backgroundColor: '#FFE9E7',
            },
          }}
          renderRightButton={() => {
            return (
              <TouchableOpacity
                onPress={() => {}}
                style={tw`bg-[${colors.whiteSmoke}] py-3 px-2`}>
                <Icon name="arrow-forward" size={20} color={colors.black} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default AddressInput;
