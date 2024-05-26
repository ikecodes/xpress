import {
  View,
  Text,
  Image,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import GeneralLayout from '../../components/shared/GeneralLayout';
import tw from 'twrnc';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Divider from '../../components/shared/Divider';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {onboardingRouteStack} from '../../constants/screens';
import {useDispatch} from 'react-redux';
import {setOrigin} from '../../slices/userSlice';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Config from 'react-native-config';

const Initial = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const saveLocation = async () => {
    //@ts-ignore
    Geolocation.getCurrentPosition(
      async (position: any) => {
        const {coords} = position;
        try {
          const json = await Geocoder.from({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
          dispatch(
            setOrigin({
              latitude: coords.latitude,
              longitude: coords.longitude,
              description: json.results[0].formatted_address,
            }),
          );
        } catch (error) {
          console.log('Err', error);
        }
      },
      (err: any) => {
        console.log(err);
      },
    );
  };

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        saveLocation();
      } else {
        Alert.alert('Permission Denied');
      }
    } catch (err) {
      Alert.alert(
        'Enable Location',
        'This service requires that location settings is turned on',
      );
    }
  }
  const callLocation = () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization(
        () => {
          saveLocation();
        },
        () => {
          Alert.alert(
            'Enable Location',
            'This service requires that location settings is turned on',
          );
        },
      );
    } else {
      requestLocationPermission();
    }
  };
  useEffect(() => {
    Geocoder.init(Config.GOOGLE_MAPS_API_KEY as unknown as string);
    callLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <GeneralLayout style={tw``}>
      <View style={tw`mt-15 items-center justify-center mb-5`}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={{
            height: moderateScale(180),
            width: moderateScale(180),
          }}
        />
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-2xl font-bold text-[${colors.black}] mb-3`}>
          Your ticket to swift city travels.
        </Text>
        <Text style={tw`text-[${colors.black}] mb-3`}>
          Streamline your journey with real-time schedules, easy ticketing, and
          fast city navigation at your fingertips.
        </Text>
        <View style={tw`my-5`}>
          <PrimaryButton
            textStyle={tw`font-semibold`}
            text="Login"
            onPress={() => {
              console.log('Pressing');
              navigation.navigate(onboardingRouteStack.SignIn);
            }}
          />
          <PrimaryButton
            textStyle={tw`text-[${colors.black}] font-semibold`}
            bodyStyle={tw`bg-[${colors.whiteSmoke}] my-3`}
            text="Register"
            onPress={() => {
              navigation.navigate(onboardingRouteStack.Register);
            }}
          />
          <PrimaryButton
            textStyle={tw`text-[${colors.black}] font-semibold`}
            bodyStyle={tw`bg-[${colors.white}]`}
            text="Continue as Guest"
            onPress={() => {}}
          />
        </View>
        <View style={tw`mt-auto`}>
          <Divider />
          <Text style={tw`my-10 text-[${colors.grayText}]`}>
            By tapping Login, Register or by continuing as Guest, you agree to
            Xpresso’s Terms & Conditions and Privacy Policy.
          </Text>
        </View>
      </View>
    </GeneralLayout>
  );
};

export default Initial;
