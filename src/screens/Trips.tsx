import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import PageHeader from '../components/shared/PageHeader';
const Trips = () => {
  return (
    <View style={tw`flex-1`}>
      <PageHeader title={'Trips'} />
      <Text>Trips</Text>
    </View>
  );
};

export default Trips;
