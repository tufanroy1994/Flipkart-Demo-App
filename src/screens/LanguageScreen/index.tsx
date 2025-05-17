import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {BaseButton, BaseLanguageCard, BaseText} from '../../components';
import {AppColors} from '../../utils';
import {
  useAppNavigation,
  useAppDispatch,
  useAppSelector,
  useTranslation,
} from '../../hooks';
import {setLanguage, resetLanguage} from '../../redux/slices/LanguageSlice';
import {styles} from './styles';

const languages = [
  {
    id: 'bn',
    name: 'বাংলা',
    label: 'Bengali',
    icon: require('../../assets/images/bangla.png'),
  },
  {
    id: 'as',
    name: 'অসমীয়া',
    label: 'Assamese',
    icon: require('../../assets/images/assamese.png'),
  },
  {
    id: 'hi',
    name: 'हिंदी',
    label: 'Hindi',
    icon: require('../../assets/images/hindi.png'),
  },
  {
    id: 'en',
    name: 'English',
    label: 'English',
    icon: require('../../assets/images/english.png'),
  },
  {
    id: 'te',
    name: 'తెలుగు',
    label: 'Telugu',
    icon: require('../../assets/images/telugu.png'),
  },
  {
    id: 'ta',
    name: 'தமிழ்',
    label: 'Tamil',
    icon: require('../../assets/images/tamil.png'),
  },
  {
    id: 'mr',
    name: 'मराठी',
    label: 'Marathi',
    icon: require('../../assets/images/marathi.png'),
  },
  {
    id: 'ka',
    name: 'ಕನ್ನಡ',
    label: 'Kannada',
    icon: require('../../assets/images/kannada.png'),
  },
  {
    id: 'od',
    name: 'ଓଡ଼ିଆ',
    label: 'Odia',
    icon: require('../../assets/images/odia.png'),
  },
  {
    id: 'gu',
    name: 'ગુજરાતી',
    label: 'Gujarati',
    icon: require('../../assets/images/gujarati.png'),
  },
  {
    id: 'ma',
    name: 'മലയാളം',
    label: 'Malayalam',
    icon: require('../../assets/images/malayalam.png'),
  },
  {
    id: 'pu',
    name: 'ਪੰਜਾਬੀ',
    label: 'Punjabi',
    icon: require('../../assets/images/punjabi.png'),
  },
];

const LanguageScreen = () => {
  const navigation = useAppNavigation('LanguageScreen');

  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(
    store => store.LanguageReducer.selectedLanguage,
  );
  const {t} = useTranslation();

  // Reset selected language every time the screen is focused
  useFocusEffect(
    useCallback(() => {
      dispatch(resetLanguage());
    }, [dispatch]),
  );

  const handleSelectLanguage = (langId: string) => {
    dispatch(setLanguage(langId as any));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BaseText style={styles.headerText}>
          {t('choose_your_language')}
        </BaseText>
      </View>
      <Text style={styles.subTitle}>{t('choose_language')}</Text>

      <FlatList
        data={languages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <BaseLanguageCard
            name={item.name}
            label={item.label}
            icon={item.icon}
            isSelected={selectedLanguage === item.id}
            onPress={() => handleSelectLanguage(item.id)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
      <View style={[styles.buttonContainer]}>
        <BaseButton
          title={t('continue')}
          style={[
            {
              backgroundColor: selectedLanguage
                ? AppColors.BUTTON
                : AppColors.GREY_BORDER,
            },
          ]}
          disabled={!selectedLanguage}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};

export default LanguageScreen;
