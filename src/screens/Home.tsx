import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/shared/Map';
import AddressInput from '../components/inputs/AddressInput';

const Home = () => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-40 bg-white p-3`}>
        <AddressInput />
      </View>
      <Map />
    </View>
  );
};

export default Home;
