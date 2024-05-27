import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import PageHeader from '../components/shared/PageHeader';

import Train from '../assets/icons/train-white.svg';
import Bus from '../assets/icons/bus-white.svg';
import Tram from '../assets/icons/tram-white.svg';
import Bar from '../assets/icons/bar.svg';

const size = 25;
const size2 = 120;
const Tickets = () => {
  const tickets = [
    {
      icon: <Train height={size} width={size} />,
      overlay: <Train height={size2} width={size2} />,
      name: 'TRAIN 78',
      date: '18.03.2024.',
    },
    {
      icon: <Bus height={size} width={size} />,
      overlay: <Bus height={size2} width={size2} />,
      name: 'BUS 204 ',
      date: '17.03.2024.',
    },
    {
      icon: <Tram height={size} width={size} />,
      overlay: <Tram height={size2} width={size2} />,
      name: 'TRAM 9',
      date: '15.03.2024.',
    },
  ];
  return (
    <View style={tw`flex-1 bg-white`}>
      <PageHeader title={'Tickets'} />
      <View style={tw`flex gap-3 px-5 mt-5`}>
        {tickets.map((item, i) => {
          return (
            <View
              key={i}
              style={tw`bg-[#CF4341] gap-5 p-3 rounded-lg relative`}>
              <View style={tw`flex-row items-start justify-between`}>
                <View>
                  <Text style={tw`text-white font-bold text-xl`}>
                    {item.name}
                  </Text>
                  <Text style={tw`text-white`}>{item.date}</Text>
                </View>
                <Image
                  source={require('../assets/images/bar-code.png')}
                  resizeMode="contain"
                  style={[
                    tw``,
                    {
                      height: 50,
                      width: 120,
                    },
                  ]}
                />
              </View>
              <View style={tw`flex-row items-center justify-between`}>
                <View style={tw`w-[35%]`}>
                  <Text style={tw`text-white font-bold`}>
                    Čičkovina 24C, 10000 Zagreb 08:54 PM
                  </Text>
                </View>
                <Bar height={size} width={size} />
                {item.icon}
                <Bar height={size} width={size} />
                <View style={tw`w-[35%]`}>
                  <Text style={tw`text-white font-bold text-right`}>
                    Čičkovina 24C, 10000 Zagreb 08:54 PM
                  </Text>
                </View>
              </View>
              <View style={tw`absolute top-0 right-0 opacity-20`}>
                {item.overlay}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Tickets;
