import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import {AppImages} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const WelcomeScreen = () => {
  const navigation = useAppNavigation('WelcomeScreen');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LanguageScreen'); // Replace your target screen name
    }, 1000);

    // return () => clearTimeout(timer); // Clear timer on unmount
  }, [navigation]);

  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        <Image
          source={AppImages.LOGO}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
