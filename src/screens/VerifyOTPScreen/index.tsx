import React, {useEffect, useRef, useState} from 'react';
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
import {useAppNavigation, useTranslation} from '../../hooks';
import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from '../../navigation/types/RootStackTypes';
import {styles} from './styles';

const VerifyOTPScreen = () => {
  const navigation = useAppNavigation('VerifyOTPScreen');

  const {t} = useTranslation();

  const {params} = useRoute<RootRouteProps<'VerifyOTPScreen'>>();

  const [otpArray, setOtpArray] = useState<string[]>(Array(6).fill(''));
  const [timer, setTimer] = useState<number>(0);
  const isOtpComplete = otpArray.every(digit => digit !== '');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to format MM:SS
  const formatTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  const startTimer = () => {
    setOtpArray(Array(6).fill(''));
    setTimer(15);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      // Clear timer on unmount
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleOtpChange = (newOtpArray: string[]) => {
    setOtpArray(newOtpArray);
  };

  const handleOtpComplete = (code: string) => {
    console.log('OTP Entered:', code);
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
          {t('verification_prompt')} {params.phoneNumber}
          {'  '}
          <Text style={[styles.editText]} onPress={() => navigation.goBack()}>
            {t('edit')}
          </Text>
        </Text>
        <BaseOTPField
          value={otpArray}
          onCodeFilled={handleOtpComplete}
          onOtpChange={handleOtpChange}
        />
        <TouchableOpacity disabled={timer !== 0} onPress={startTimer}>
          <Text style={styles.resendCode}>
            {timer == 0 ? t('resend_code') : formatTime(timer)}
          </Text>
        </TouchableOpacity>
        <BaseButton
          title={t('verify')}
          disabled={!isOtpComplete}
          style={{
            backgroundColor: isOtpComplete
              ? AppColors.BUTTON // Disabled color
              : AppColors.GREY_BORDER, // Active color
          }}
          onPress={() => {
            console.log('Verify Button Pressed');
            // Verify OTP logic here
            navigation.reset({
              index: 0,
              routes: [{name: 'BottomTabNavigation'}],
            });
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default VerifyOTPScreen;
