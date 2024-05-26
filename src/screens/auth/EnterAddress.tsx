import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import tw from 'twrnc';
import {colors} from '../../theme/colors';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Back from '../../assets/icons/back.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {backButtonSize} from '../../constants/sizes';
import {onboardingRouteStack} from '../../constants/screens';
import DropdownMenu from '../../components/inputs/DropdownMenu';
import countries from '../../constants/countries.json';
const EnterAddress = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const formattedCountries = useMemo(() => {
    if (countries) {
      return Object.keys(countries).map((val: any) => {
        return {
          label: val,
          value: val,
        };
      });
    }
    return [];
  }, []);
  const formattedCities = useMemo(() => {
    const countriesList: any = countries;
    if (countriesList && country) {
      return countriesList[`${country}`].map((val: any) => {
        return {
          label: val,
          value: val,
        };
      });
    }
    return [];
  }, [country]);

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-[35%]`}>
        <ImageBackground
          source={require('../../assets/images/background-2.png')}
          style={tw`w-full h-full`}
        />
      </View>

      <View style={tw`flex-1 rounded-t-3xl mt--5 p-5 bg-[${colors.white}]`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}>
          <Back height={backButtonSize} width={backButtonSize} />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-extrabold text-[${colors.black}] mb-3`}>
          First, can you tell us where you live?
        </Text>
        <ScrollView>
          <DropdownMenu
            label={'Country'}
            placeholder={'Select a country from the list'}
            options={formattedCountries}
            value={country}
            onChange={({value}) => {
              setCountry(value);
            }}
          />
          <DropdownMenu
            label={'City'}
            placeholder={'Select a city from the list'}
            options={formattedCities}
            value={city}
            disabled={!country}
            onChange={({value}) => {
              setCity(value);
            }}
          />
        </ScrollView>
        <PrimaryButton
          bottomSticky
          text="Next"
          onPress={() => {
            navigation.navigate(onboardingRouteStack.EnterLocation);
          }}
        />
      </View>
    </View>
  );
};

export default EnterAddress;
