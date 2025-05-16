import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {BaseText, BaseButton} from '../../components';
import {AppImages, AppStrings, AppColors, FontSizes} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const LoginScreen = () => {
  const navigation = useAppNavigation('LoginScreen');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <KeyboardAvoidingView
      style={[styles.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={[styles.header]}>
        <TouchableOpacity>
          <Icon
            name="close"
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
        <BaseText style={[styles.title]}>
          {AppStrings.log_in_to_get_started}
        </BaseText>
        <BaseText style={[styles.subtitle]}>
          {AppStrings.experience_new_flipkart}
        </BaseText>
        <Text style={[styles.label]}>{AppStrings.phone_number}</Text>
        <View style={styles.inputContainer}>
          <Text style={[styles.code]}>+91</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={val => {
              setPhoneNumber(val);
              setIsButtonDisabled(val.length !== 10); // Enable button when length is 10
            }}
            maxLength={10}
            placeholder="Enter Your Mobile Number"
            placeholderTextColor="#C3C3C3"
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('EmailLoginScreen')}>
          <Text style={styles.useEmail}>{AppStrings.use_email_id}</Text>
        </TouchableOpacity>
        <Text style={styles.terms}>
          By continuing, you confirm that you are above 18 years of age, and you
          agree to Flipkart's
          <Text
            style={styles.link}
            onPress={() => console.log('Terms of Use clicked')}>
            {' '}
            Terms of Use
          </Text>{' '}
          and
          <Text
            style={styles.link}
            onPress={() => console.log('Privacy Policy clicked')}>
            {' '}
            Privacy Policy
          </Text>
        </Text>

        <BaseButton
          title={AppStrings.continue}
          style={[
            {
              backgroundColor: isButtonDisabled
                ? AppColors.GREY_BORDER
                : AppColors.BUTTON,
            },
          ]}
          disabled={isButtonDisabled}
          onPress={() => navigation.navigate('VerifyOTPScreen', {phoneNumber})}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
