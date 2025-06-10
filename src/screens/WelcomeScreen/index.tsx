import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import {AppImages} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const WelcomeScreen = () => {
  const navigation = useAppNavigation('WelcomeScreen');

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LanguageScreen'); // Replace your target screen name
    }, 1000);
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
