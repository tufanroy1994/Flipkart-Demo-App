import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import {BaseTab, BaseBanner} from '../../components';
import {AppColors, AppImages, getStoredPincode, savePincode} from '../../utils';
import {useAppNavigation, useTranslation} from '../../hooks';
import {styles} from './styles';

const HomeScreen = () => {
  const navigation = useAppNavigation('HomeScreen');

  const [modalVisible, setModalVisible] = useState(false);
  const [focusedTab, setFocusedTab] = useState<string>('Flipkart');
  const [pincode, setPincode] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('');
  const [isOn, setIsOn] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSwitch = () => setIsOn(prev => !prev);

  const isPincodeValid = /^\d{6}$/.test(pincode); // 6-digit number
  const {t} = useTranslation();

  const bannerImages = [
    AppImages.BANNER_1,
    AppImages.BANNER_2,
    AppImages.BANNER_3,
    AppImages.BANNER_4,
    AppImages.BANNER_5,
  ];

  const categoryData = [{id: '1', image: AppImages.BEAUTY}];

  // Reset tab focus when HomeScreen becomes active
  useFocusEffect(
    useCallback(() => {
      setFocusedTab('Flipkart');
    }, []),
  );

  useEffect(() => {
    const fetchPincode = async () => {
      const pincode = await getStoredPincode();
      setSelectedPincode(pincode);
    };
    fetchPincode();
  }, []);

  const handleSubmit = async () => {
    if (isPincodeValid) {
      await savePincode(pincode);
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
        {/* Header Tab Section */}

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
          {/* Location Section */}

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

          {/*Toogle Button Section  */}

          <View style={styles.container}>
            <View style={styles.leftSection}>
              <Text style={styles.label}>Brand Mall</Text>
              <TouchableOpacity
                onPress={toggleSwitch}
                activeOpacity={0.8}
                style={[
                  styles.toggleTrack,
                  isOn ? styles.trackOn : styles.trackOff,
                ]}>
                {/* ON/OFF background label */}
                <View style={styles.labelsContainer}>
                  <Text style={[styles.toggleLabel, styles.leftLabel]}>ON</Text>
                  <Text style={[styles.toggleLabel, styles.rightLabel]}>
                    OFF
                  </Text>
                </View>
                {/* Sliding Thumb */}
                <View
                  style={[
                    styles.thumb,
                    {alignSelf: isOn ? 'flex-end' : 'flex-start'},
                  ]}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.searchBox}>
              <Icon name="magnifying-glass" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search"
                placeholderTextColor={AppColors.BLUE_BORDER}
              />
            </View>
          </View>

          {/* Banner Section */}

          <View style={[styles.bannerContainer]}>
            <BaseBanner images={bannerImages} />
          </View>

          {/* Category list Section */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}>
            <TouchableOpacity>
              <Image source={AppImages.BEAUTY} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.FASHION} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.GADGETS} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.HOME} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.APPLIENCE} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.FOOD} style={[styles.image]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.ELECTRONICS} style={[styles.image]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.TOYS} style={[styles.image]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.SPORTS} style={[styles.image]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.MOBILE} style={[styles.image]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.SPOYL} style={[styles.image]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.FURNITURE} style={[styles.image]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.MORE} style={[styles.image]} />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Modal Section */}

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
              <View style={styles.container2}>
                <TextInput
                  style={styles.input2}
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
