import {View, Text} from 'react-native';
import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import tw from 'twrnc';
import Ticket from '../assets/icons/ticket.svg';
import Plus from '../assets/icons/plus.svg';
import Download from '../assets/icons/download.svg';
import Upload from '../assets/icons/upload.svg';
import ViewIcon from '../assets/icons/view.svg';
import Settings from '../assets/icons/settings.svg';
import {colors} from '../theme/colors';

const Wallet = () => {
  const size = 20;
  const transactions = [
    {
      icon: <Ticket height={size} width={size} />,
      name: 'Tram Ticket',
      amount: '- 12.25 €',
    },
    {
      icon: <Ticket height={size} width={size} />,
      name: 'Bus Ticket',
      amount: '- 4.25 €',
    },
    {
      icon: <Plus height={size} width={size} />,
      name: 'Wallet Balance',
      amount: '+ 136.90 €',
    },
  ];
  const others = [
    {
      icon: <Upload height={size} width={size} />,
    },
    {
      icon: <Download height={size} width={size} />,
    },
    {
      icon: <ViewIcon height={size} width={size} />,
    },
    {
      icon: <Settings height={size} width={size} />,
    },
  ];
  return (
    <View style={tw`flex-1 bg-white`}>
      <PageHeader title={'Wallet'} />
      <View style={tw`p-5`}>
        <View
          style={tw`bg-[#1D1029] h-40 justify-center items-start p-4 rounded-lg `}>
          <Text style={tw`text-white font-bold text-2xl`}>120,40 €</Text>
          <Text style={tw`text-white mt-2`}>Total Balance</Text>
        </View>
        <View style={tw`flex flex-row justify-between mt-2`}>
          {others.map((item, i) => {
            return (
              <View
                key={i}
                style={tw`bg-[${colors.whiteSmoke}] p-7 rounded-lg`}>
                {item.icon}
              </View>
            );
          })}
        </View>
      </View>

      <View>
        <View
          style={tw`flex-row items-center justify-between border-b-[0.5px] py-5 px-5  border-[${colors.primaryLight}]`}>
          <Text style={tw`text-black font-bold text-base`}>Transactions</Text>

          <Text style={tw`text-[#ACADBC] text-base`}>See all</Text>
        </View>
        {transactions.map((transaction, i) => {
          return (
            <View
              key={i}
              style={tw`flex-row items-center justify-between border-b-[0.5px] py-5 px-5  border-[${colors.primaryLight}]`}>
              <View style={tw`flex-row gap-3`}>
                <View>{transaction.icon}</View>
                <Text style={tw`text-black`}>{transaction.name}</Text>
              </View>
              <Text style={tw`text-black`}>{transaction.amount}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Wallet;
