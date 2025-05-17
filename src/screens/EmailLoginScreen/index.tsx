import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {BaseText, BaseButton} from '../../components';
import {AppImages, AppStrings, AppColors, FontSizes} from '../../utils';
import {useAppNavigation, useTranslation} from '../../hooks';
import {styles} from './styles';

const EmailLoginScreen = () => {
  const navigation = useAppNavigation('LoginScreen');

  const {t} = useTranslation();

  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <KeyboardAvoidingView style={[styles.container]}>
      <View style={[styles.header]}>
        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'BottomTabNavigation'}],
            })
          }>
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
        <BaseText style={[styles.title]}>{t('log_in_to_get_started')}</BaseText>
        <BaseText style={[styles.subtitle]}>
          {t('experience_new_flipkart')}
        </BaseText>
        <Text style={[styles.label]}>{AppStrings.email_id}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={val => {
              setEmail(val.toLowerCase());
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              setIsButtonDisabled(!emailRegex.test(val)); // ✅ Check valid email
            }}
            placeholder="Enter Your Email ID"
            placeholderTextColor="#C3C3C3"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.useEmail}>{AppStrings.use_phone_number}</Text>
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
          title={t('continue')}
          style={[
            {
              backgroundColor: isButtonDisabled
                ? AppColors.GREY_BORDER
                : AppColors.BUTTON,
            },
          ]}
          disabled={isButtonDisabled}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailLoginScreen;
