import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import {BaseTab} from '../../components';
import {AppColors, AppImages} from '../../utils';
import {useAppNavigation, useTranslation} from '../../hooks';
import {styles} from './styles';

const HomeScreen = () => {
  const navigation = useAppNavigation('HomeScreen');

  const [modalVisible, setModalVisible] = useState(false);
  const [focusedTab, setFocusedTab] = useState<string>('Flipkart');
  const [pincode, setPincode] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('');

  const isPincodeValid = /^\d{6}$/.test(pincode); // 6-digit number
  const {t} = useTranslation();

  // Reset tab focus when HomeScreen becomes active
  useFocusEffect(
    useCallback(() => {
      setFocusedTab('Flipkart');
    }, []),
  );

  const handleSubmit = () => {
    if (isPincodeValid) {
      setSelectedPincode(pincode);
      setModalVisible(false);
      setPincode('');
    }
  };

  return (
    <View style={[styles.flexContainer]}>
      <LinearGradient
        colors={['#AFDDFF', '#f7fbff', '#ffffff']}
        style={styles.linearGradient}>
        <View style={[styles.header]}>
          <BaseTab
            image={AppImages.LOGO}
            title="Flipkart"
            isFocused={focusedTab === 'Flipkart'}
            focusedColor={AppColors.YELLOW_BACKGROUND}
            onPress={() => {
              navigation.navigate('HomeScreen');
              setFocusedTab('Flipkart');
            }}
          />
          <BaseTab
            image={AppImages.GROCERY}
            title="Grocery"
            isFocused={focusedTab === 'Grocery'}
            focusedColor={AppColors.CHOCOLATE_BACKGROUND}
            onPress={() => {
              navigation.navigate('GroceryScreen');
              setFocusedTab('Grocery');
            }}
          />
          <BaseTab
            image={AppImages.TRAVEL}
            title="Travel"
            isFocused={focusedTab === 'Travel'}
            focusedColor={AppColors.DEEP_BLUE_BACKGROUND}
            onPress={() => {
              navigation.navigate('TravelScreen');
              setFocusedTab('Travel');
            }}
          />
          <BaseTab
            image={AppImages.PAY}
            title="Pay"
            isFocused={focusedTab === 'Pay'}
            focusedColor={AppColors.BLUE_BORDER}
            onPress={() => {
              navigation.navigate('PayScreen');
              setFocusedTab('Pay');
            }}
          />
        </View>
        <View style={[styles.contentContainer]}>
          <View style={[styles.addressContainer]}>
            <TouchableOpacity
              style={[styles.addressContainer]}
              onPress={() => setModalVisible(true)}>
              <Icon name="location-dot" size={19} />
              <Text style={[styles.location]}>{selectedPincode}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.addressContainer]}
              onPress={() => setModalVisible(true)}>
              <Text style={[styles.deliveryText]}>
                {t('select_delivery_location')}
              </Text>
              <Icon name="angle-right" size={19} style={[styles.angle]} />
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.inputBox} placeholderTextColor="#aaa" />
            <Icon name="magnifying-glass" size={25} style={styles.iconStyle} />
          </View>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={[styles.headerTextBox]}>
                <Text style={styles.modalText}>
                  {t('select_delivery_address')}
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name="circle-xmark" size={20} />
                </TouchableOpacity>
              </View>
              <Text style={[styles.pincodeText]}>
                {t('use_pincode_to_check_delivery_info')}
              </Text>
              <View style={styles.container}>
                <TextInput
                  style={styles.input}
                  placeholder={t('enter_pincode')}
                  keyboardType="numeric"
                  maxLength={6}
                  value={pincode}
                  onChangeText={setPincode}
                />
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!isPincodeValid}
                  style={[
                    styles.button,
                    {
                      backgroundColor: isPincodeValid
                        ? AppColors.BUTTON
                        : AppColors.GREY_BORDER,
                    },
                  ]}>
                  <Text style={styles.buttonText}>{t('submit')}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.currentLocation}>
                <Icon
                  name="location-crosshairs"
                  size={20}
                  color={AppColors.BLUE_BORDER}
                />
                <Text style={styles.currentText}>
                  {t('use_my_current_location')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
