import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import tw from 'twrnc';
import {colors} from '../../theme/colors';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Back from '../../assets/icons/back.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {backButtonSize} from '../../constants/sizes';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../slices/userSlice';
import Map from '../../components/shared/Map';
import {GOOGLE_AUTOCOMPLETE_OPTIONS} from '../../constants/keys';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';
const EnterLocation = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const user = useSelector((state: any) => state.user);
  const originRef: any = useRef();

  const handleLogin = () => {
    dispatch(
      setUser({
        isLoggedIn: true,
      }),
    );
  };
  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-[35%]`}>
        <Map />
      </View>

      <View style={tw`flex-1 rounded-t-3xl mt--5 p-5 bg-[${colors.white}]`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}>
          <Back height={backButtonSize} width={backButtonSize} />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-extrabold text-[${colors.black}] mb-3`}>
          What is your starting point?
        </Text>
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
            renderLeftButton={() => {
              return (
                <TouchableOpacity
                  onPress={() => {}}
                  style={tw`bg-[${colors.whiteSmoke}] py-3 px-2`}>
                  <Icon name="search-outline" size={20} color={colors.black} />
                </TouchableOpacity>
              );
            }}
            renderRightButton={() => {
              return (
                <TouchableOpacity
                  onPress={handleLogin}
                  style={tw`bg-[${colors.whiteSmoke}] py-3 px-2`}>
                  <Icon name="arrow-forward" size={20} color={colors.black} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <PrimaryButton
          text="Next"
          bottomSticky
          onPress={() => {
            dispatch(setUser({isLoggedIn: true}));
          }}
        />
      </View>
    </View>
  );
};

export default EnterLocation;
