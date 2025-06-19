import React, {useCallback, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {BaseText, BaseTab2} from '../../components';
import {AppColors} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const GameScreen = () => {
  const navigation = useAppNavigation('GameScreen');

  const [focusedTab, setFocusedTab] = useState<string>('For You');

  // Reset tab focus when GameScreen renders
  useFocusEffect(
    useCallback(() => {
      setFocusedTab('For You');
    }, []),
  );

  return (
    <View style={[styles.flexContainer]}>
      <View style={[styles.contentContainer]}>
        <BaseText>Play</BaseText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.tabList]}>
          <BaseTab2
            title="For You"
            isFocused={focusedTab === 'For You'}
            focusedBackgroundColor={AppColors.GREEN_COLOR}
            focusedTextColor={AppColors.PRIMARY_BACKGROUND}
            onPress={() => setFocusedTab('For You')}
          />
          <BaseTab2
            title="Beauty Binge"
            isFocused={focusedTab === 'Beauty Binge'}
            focusedBackgroundColor={AppColors.GREEN_COLOR}
            focusedTextColor={AppColors.PRIMARY_BACKGROUND}
            onPress={() => setFocusedTab('Beauty Binge')}
          />
          <BaseTab2
            title="Trende for him"
            isFocused={focusedTab === 'Trends for him'}
            focusedBackgroundColor={AppColors.GREEN_COLOR}
            focusedTextColor={AppColors.PRIMARY_BACKGROUND}
            onPress={() => setFocusedTab('Trends for him')}
          />
          <BaseTab2
            title="Trende for her"
            isFocused={focusedTab === 'Trends for her'}
            focusedBackgroundColor={AppColors.GREEN_COLOR}
            focusedTextColor={AppColors.PRIMARY_BACKGROUND}
            onPress={() => setFocusedTab('Trends for her')}
          />
          <BaseTab2
            title="Home Hacks"
            isFocused={focusedTab === 'Home Hacks'}
            focusedBackgroundColor={AppColors.GREEN_COLOR}
            focusedTextColor={AppColors.PRIMARY_BACKGROUND}
            onPress={() => setFocusedTab('Home Hacks')}
          />
          <BaseTab2
            title="Mobiles"
            isFocused={focusedTab === 'Mobiles'}
            focusedBackgroundColor={AppColors.GREEN_COLOR}
            focusedTextColor={AppColors.PRIMARY_BACKGROUND}
            onPress={() => setFocusedTab('Mobiles')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default GameScreen;
