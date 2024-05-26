import {Text, View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Map from '../components/shared/Map';
import AddressInput from '../components/inputs/AddressInput';
import PrimaryButton from '../components/buttons/PrimaryButton';
import {useSelector} from 'react-redux';
import Tram from '../assets/icons/tram.svg';
import Train from '../assets/icons/train.svg';
import Bike from '../assets/icons/bike.svg';
import Bus from '../assets/icons/bus.svg';
import VehicleTypeIcon from '../components/shared/VehicleTypeIcon';
import CheckBox from '../components/inputs/Checkbox';
import {colors} from '../theme/colors';
import {useFocusEffect} from '@react-navigation/native';

const size = 20;

const vehicleTypes = [
  {
    icon: <Tram height={size} width={size} />,
    name: 'Tram',
    time: '08:54 PM - 09:21 PM',
    distance: '0 hr 27 mins',
  },
  {
    icon: <Bus height={size} width={size} />,
    name: 'Bus',
    time: '08:59 PM - 09:35 PM',
    distance: '0 hr 36 mins',
  },
  {
    icon: <Train height={size} width={size} />,
    name: 'Train',
    time: '09:04 PM - 09:53 PM',
    distance: '0 hr 49 mins',
  },
  {
    icon: <Bike height={size} width={size} />,
    name: 'eBike',
    time: '08:55 PM - 09:46 PM',
    distance: '1 hr 7 mins',
  },
];
const Home = () => {
  const {origin, destination} = useSelector((state: any) => state.user);
  const [active, setActive] = useState('');
  const [showRoutes, setShowRoutes] = useState(false);
  const [showAddressBar, setShowAddressBar] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setShowAddressBar(true);
      return () => {
        setShowAddressBar(false);
      };
    }, []),
  );

  return (
    <View style={tw`flex-1`}>
      {showAddressBar && (
        <View style={tw`h-30 w-[100%] bg-white p-3`}>
          <AddressInput />
        </View>
      )}

      <View style={tw`flex bg-white p-5 flex-row justify-between`}>
        {vehicleTypes.map((type, i) => {
          return <VehicleTypeIcon icon={type.icon} name={type.name} key={i} />;
        })}
      </View>
      {showRoutes ? (
        <View style={tw`flex bg-white p-5`}>
          <Text style={tw`text-black font-bold text-base`}>
            Select your route:
          </Text>
          {vehicleTypes.map((type, i) => {
            return (
              <View
                key={i}
                style={tw`flex-row items-center justify-around border-b-[1px] py-1 ${
                  active === type.name ? 'bg-[#FFF8F7] border-l-[5px]' : ''
                } border-[${colors.primaryLight}]`}>
                <View style={tw`flex-row`}>
                  <View>{type.icon}</View>
                  <Text style={tw`ml-2 text-black`}>{type.time}</Text>
                </View>
                <Text style={tw`text-black`}>{type.distance}</Text>
                <CheckBox
                  checked={type.name === active}
                  onChecked={() => setActive(type.name)}
                />
              </View>
            );
          })}
          <View
            style={tw`flex-row items-center justify-center border-b-[1px] py-4 border-[${colors.primaryLight}]`}>
            <Text
              style={tw`text-[${colors.primaryLight}] text-base font-bold text-center`}>
              View more
            </Text>
          </View>
          <PrimaryButton
            text="Start your trip"
            bodyStyle={tw`mt-5`}
            onPress={() => {
              setShowRoutes(prev => !prev);
            }}
            isDisabled={!active}
          />
        </View>
      ) : (
        <View />
      )}

      <Map />
      {!showRoutes && (
        <View style={tw`absolute bottom-0 left-0 w-[100%] h-20 p-3`}>
          <PrimaryButton
            text="Select your route"
            onPress={() => {
              setShowRoutes(prev => !prev);
            }}
            isDisabled={!origin || !destination}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
