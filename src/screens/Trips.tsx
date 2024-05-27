import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import PageHeader from '../components/shared/PageHeader';
import Train from '../assets/icons/train.svg';
import TrainGray from '../assets/icons/train-gray.svg';
import Bus from '../assets/icons/bus.svg';
import BusGray from '../assets/icons/bus-gray.svg';
import Bike from '../assets/icons/bike.svg';
import BikeGray from '../assets/icons/bike-gray.svg';
import Icon from 'react-native-vector-icons/Ionicons';
const Trips = () => {
  const size = 22;
  const trips = [
    {
      icon: <TrainGray height={size} width={size} />,
      icon2: <Train height={size} width={size} />,
      day: 'Monday',
      date: '18.03.2024.',
      time: '',
      amount: '',
      distance: '',
    },
    {
      icon: <BikeGray height={size} width={size} />,
      icon2: <Bike height={size} width={size} />,
      day: 'Sunday',
      date: '17.03.2024.',
      time: '',
      amount: '',
      distance: ' ',
    },
    {
      icon: <BusGray height={size} width={size} />,
      icon2: <Bus height={size} width={size} />,
      day: 'Friday',
      date: '15.03.2024.',
      time: '',
      amount: '',
      distance: ' ',
    },
  ];

  return (
    <View style={tw`flex-1`}>
      <PageHeader title={'Trips'} />

      <View style={tw`flex gap-3 px-5 mt-5`}>
        {trips.map((item, i) => {
          return (
            <View key={i} style={tw`gap-5 bg-white p-3 rounded-lg relative`}>
              <View style={tw`flex-row items-center justify-between`}>
                <View style={tw`flex-row items-start justify-between`}>
                  <View style={tw`flex-row items-center  gap-2`}>
                    <Text style={tw`text-black font-bold text-base`}>
                      {item.day},
                    </Text>
                    <Text style={tw`text-black`}>{item.date}</Text>
                  </View>
                </View>
                <Icon name="close-circle-outline" size={25} color="black" />
              </View>
              <View style={tw``}>
                <View style={tw`flex-row items-center gap-1`}>
                  {item.icon}
                  <Text style={tw`text-black`}>
                    From <Text style={tw`font-bold`}>Ilica 222</Text>, 10000
                    Zagreb
                  </Text>
                </View>
                <View style={tw`flex-row items-center gap-1 mt-1`}>
                  {item.icon2}
                  <Text style={tw`text-black`}>
                    From <Text style={tw`font-bold`}>Ilica 222</Text>, 10000
                    Zagreb
                  </Text>
                </View>
              </View>
              <View style={tw`flex-row items-center gap-2`}>
                <Text style={tw`text-[#ACADBC] text-xs font-bold`}>
                  12:02 PM - 13:08 PM
                </Text>
                <Text style={tw`text-[#ACADBC] text-xs font-bold`}>|</Text>
                <Text style={tw`text-[#ACADBC] text-xs`}>4.25€</Text>
                <Text style={tw`text-[#ACADBC] text-xs font-bold`}>|</Text>
                <Text style={tw`text-[#ACADBC] text-xs`}>0 hr 24 mins</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Trips;
