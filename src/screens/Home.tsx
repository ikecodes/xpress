import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/shared/Map';

const Home = () => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-50 bg-white`}></View>
      <Map />
    </View>
  );
};

export default Home;
