import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {BaseText, BaseButton, BaseOTPField} from '../../components';
import {AppImages, AppStrings, AppColors, FontSizes} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from '../../navigation/types/RootStackTypes';
import {styles} from './styles';

const VerifyOTPScreen = () => {
  const navigation = useAppNavigation('VerifyOTPScreen');

  const {params} = useRoute<RootRouteProps<'VerifyOTPScreen'>>();

  const [otpArray, setOtpArray] = useState<string[]>(Array(6).fill(''));
  const isOtpComplete = otpArray.every(digit => digit !== '');

  const handleOtpChange = (newOtpArray: string[]) => {
    setOtpArray(newOtpArray);
  };

  const handleOtpComplete = (code: string) => {
    console.log('OTP Entered:', code);
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTabNavigation'}],
    });
  };

  return (
    <KeyboardAvoidingView style={[styles.container]} behavior="padding">
      <View style={[styles.header]}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Icon
            name="arrowleft"
            size={FontSizes.FONT_SIZE_18}
            color={AppColors.PRIMARY_BACKGROUND}
            style={[styles.icon]}
          />
        </TouchableOpacity>
        <View style={[styles.logoContainer]}>
          <Image source={AppImages.YELLOW_LOGO} style={[styles.logo]} />
          <BaseText>{AppStrings.flipkart}</BaseText>
        </View>
      </View>
      <View style={[styles.contentContainer]}>
        <Text style={[styles.text]}>
          Please enter the verification code we've sent you on{' '}
          {params.phoneNumber}
        </Text>
        <BaseOTPField
          onCodeFilled={handleOtpComplete}
          onOtpChange={handleOtpChange}
        />
        <TouchableOpacity>
          <Text style={styles.resendCode}>{AppStrings.resend_code}</Text>
        </TouchableOpacity>
        <BaseButton
          title={AppStrings.verify}
          disabled={!isOtpComplete}
          style={{
            backgroundColor: isOtpComplete
              ? AppColors.BUTTON // Disabled color
              : AppColors.GREY_BORDER, // Active color
          }}
          onPress={() => {
            console.log('Verify Button Pressed');
            // Verify OTP logic here
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default VerifyOTPScreen;
