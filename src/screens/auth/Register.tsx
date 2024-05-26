import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {colors} from '../../theme/colors';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import InputField from '../../components/inputs/InputField';
import Mail from '../../assets/icons/mail.svg';
import Password from '../../assets/icons/password.svg';
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Apple from '../../assets/icons/apple.svg';
import Back from '../../assets/icons/back.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {backButtonSize} from '../../constants/sizes';
import {onboardingRouteStack} from '../../constants/screens';
const Register = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const size = 20;
  const size2 = 30;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-[35%]`}>
        <ImageBackground
          source={require('../../assets/images/background-1.png')}
          style={tw`w-full h-full`}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`absolute top-5`}>
        <Back height={backButtonSize} width={backButtonSize} />
      </TouchableOpacity>
      <View style={tw`flex-1 rounded-t-3xl mt--5 p-5 bg-[${colors.white}]`}>
        <Text style={tw`text-2xl font-extrabold text-[${colors.black}] mb-3`}>
          Create Account
        </Text>
        <Text style={tw`text-[${colors.black}] mb-3`}>
          Create an account so you can start streamlining your journey.
        </Text>
        <ScrollView>
          <InputField
            icon={<Mail height={size} width={size} />}
            label="Email"
            placeholder="Email"
            value={email}
            onChangeText={val => setEmail(val)}
          />
          <InputField
            icon={<Password height={size} width={size} />}
            label="Password"
            placeholder="Password"
            value={password}
            onChangeText={val => setPassword(val)}
          />
          <InputField
            icon={<Password height={size} width={size} />}
            label="Password"
            placeholder="Confirm Password"
            value={password}
            onChangeText={val => setPassword(val)}
          />
        </ScrollView>
        <PrimaryButton
          bottomSticky
          text="Register"
          onPress={() => {
            navigation.navigate(onboardingRouteStack.EnterAddress);
          }}
        />
        <Text style={tw`text-[${colors.black}] text-center mb-3`}>
          Or continue with
        </Text>
        <View style={tw`flex-row gap-3 items-center justify-center`}>
          <Google height={size2} width={size2} />
          <Facebook height={size2} width={size2} />
          <Apple height={size2} width={size2} />
        </View>
      </View>
    </View>
  );
};

export default Register;
