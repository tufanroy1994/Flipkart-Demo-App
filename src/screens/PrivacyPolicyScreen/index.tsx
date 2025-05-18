import React from 'react';
import {View, Text, Linking, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {BaseText} from '../../components';
import {AppStrings, AppColors} from '../../utils';
import {useAppNavigation} from '../../hooks';
import {styles} from './styles';

const PrivacyPolicyScreen = () => {
  const navigation = useAppNavigation('PrivacyPolicyScreen');

  const handleLinkPress = () => {
    Linking.openURL('https://www.flipkart.com');
  };

  return (
    <ScrollView style={[styles.container]}>
      <View style={[styles.header]}>
        <Icon
          name="arrowleft"
          size={25}
          style={[styles.icon]}
          onPress={() => navigation.goBack()}
        />
        <BaseText>{AppStrings.privacy_policy}</BaseText>
      </View>
      <View style={[styles.contentContainer]}>
        <Text style={[styles.mainText, {fontWeight: 'bold'}]}>
          {AppStrings.PRIVACY_POLICY}
        </Text>
        <Text style={[styles.mainText]}>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            {AppStrings.disclaimer}:{' '}
          </Text>
          In case of any discrepancy or difference, the English version will
          take precedence over the translation
        </Text>
        <Text style={styles.text}>
          We value the trust you place in us and recognize the importance of
          secure transactions and information privacy. This Privacy Policy
          describes how Flipkart Internet Private Limited and its affiliates
          (collectively “Flipkart, we, our, us”) collect, use, share or
          otherwise process your personal data through Flipkart website{' '}
          <Text style={styles.link} onPress={handleLinkPress}>
            www.flipkart.com
          </Text>
          , its mobile application, and m-site (hereinafter referred to as the
          “Platform”).
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          While you can browse sections of the Platform without the need of
          sharing any information with us, however, please note we do not offer
          any product or service under this Platform outside India and your
          personal data will primarily be stored and processed in India. By
          visiting this Platform, providing your information or availing out
          product/service, you expressly agree to be bound by the terms and
          conditions of this Privacy Policy, the{' '}
          <Text style={[styles.link]}>Terms of Use</Text> and the applicable
          service/product terms and conditions, and agree to be governed by the
          laws of India including but not limited to the laws applicable to data
          protection and privacy. If you do not agree please do not use or
          access our Platform.
        </Text>
        <Text></Text>
        <BaseText
          style={[
            styles.mainText,
            {fontWeight: 'bold', color: AppColors.PRIMARY_TEXT},
          ]}>
          {AppStrings.collect_your_information}
        </BaseText>
        <Text></Text>
        <Text style={[styles.text]}>
          When you use our Platform, we collect and store your information which
          is provided by you from time to time. Once you give us your personal
          data, you are not anonymous to us. Where possible, we indicate which
          fields are required and which fields are optional. You always have the
          option to not provide data by choosing not to use a particular
          service, product or feature on the Platform.
        </Text>
        <Text></Text>
        <Text style={[styles.text]}>
          We may track your buying behavior, preferences, and other information
          that you choose to provide on our Platform. We use this information to
          do internal research on our users' demographics, interests, and
          behavior to better understand, protect and serve our users. This
          information is compiled and analyzed on an aggregated basis. This
          information may include the URL that you just came from (whether this
          URL is on our Platform or not), which URL you next go to (whether this
          URL is on our Platform or not), your computer browser information, and
          your IP address.
        </Text>
        <Text></Text>
        <Text style={[styles.text]}>
          We may collect personal data (such as email address, delivery address,
          name, phone number, credit card/debit card and other payment
          instrument details or medical or health related information) from you
          when you set up an account or transact with us or participate in any
          event or contest. While you can browse some sections of our Platform
          without being a registered member, certain activities (such as placing
          an order or consuming our online content or services) do require
          registration. We use your contact information to send you offers based
          on your previous orders and your interests.
        </Text>
        <Text></Text>
        <Text style={[styles.text]}>
          If you choose to post messages on our message boards, chat rooms or
          other message areas or leave feedback on the Platform or the social
          media handles maintained by us or if you use voice commands or virtual
          try and buy or similar features to shop on the Platform, we will
          collect that information you provide to us. We retain this information
          as necessary to resolve disputes, provide customer support,
          troubleshoot problems or for internal research and analysis as
          permitted by law.
        </Text>
        <Text></Text>
        <Text style={[styles.text]}>
          If you send us personal correspondence, such as emails or letters, or
          if other users or third parties send us correspondence about your
          activities or postings on the Platform, we may collect such
          information into a file specific to you.
        </Text>
        <Text></Text>
        <Text style={[styles.text]}>
          If you enroll into our loyalty and membership program, such SuperCoin,
          VIP or similar programs offered by Flipkart, we will collect and store
          your personal data such as name, contact number, email address,
          communication address, date of birth, gender, zip code, lifestyle
          information, demographic and work details which is provided by you to
          Flipkart or a third-party business partner that operates
          online/offline establishments or platforms where you can earn loyalty
          points for purchase of goods and services, and redeem loyalty points.
          We will also collect your information related to your transactions on
          Flipkart platform and such third-party business partner platforms.
          When such a third-party business partner collects your personal data
          directly from you, you will be governed by their privacy policies.
          Additionally, we collect your UPI ID if you choose to pay via our
          Flipkart UPI platform. Flipkart shall not be responsible for the
          third-party business partner’s privacy practices or the content of
          their privacy policies, and we request you to read their privacy
          policies prior to disclosing any information.
        </Text>
        <Text></Text>
        <Text style={[styles.text]}>
          Flipkart has onboarded certain third-party business partners on the
          Platform who specialize in the categories like travel ticket
          reservations, booking online movie tickets, paying online bills and
          more (Ultra-Partners). If you use the services of Ultra-Partners, you
          will be redirected to Ultra-Partners websites/applications and your
          entry to Ultra-Partners websites/applications will be based on your
          Flipkart login credentials after seeking your permissions to share the
          data further. Flipkart shall not be responsible for the
          Ultra-Partner’s privacy practices or the content of their privacy
          policies, and we request you to read their privacy policies prior to
          disclosing any information.
        </Text>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;
