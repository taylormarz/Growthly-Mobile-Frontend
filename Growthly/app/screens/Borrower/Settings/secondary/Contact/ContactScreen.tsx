import React from 'react';
import {
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import Toast from 'react-native-toast-message';
import Input from '@/app/components/TestInput/TestInput';
import NavBar from '@/app/components/NavBar/NavBar';
import TestButton from '@/app/components/TestButton/TestButton';

export default function EditEmailScreen() {
  const router = useRouter();

  const handleContactUs = () => {
    Toast.show({
      type: 'success',
      text1: 'Success:',
      text2: 'Someone from our team will be in touch with you shortly.'
    });
  };

  const navigateBackToSettings = () => {
    router.push('../../main/SettingsScreen');
  };

  return (
    <View style={styles.screenContainer}>
      {/* logo + cancel button banner */}
      <Banner
        subheading='Do you have a question or concern?'
        heading='Contact Us'
        onPress={navigateBackToSettings}
      ></Banner>

      <Input placeholder='Enter inquiry here'></Input>
      <TestButton title='Submit' onPress={handleContactUs}></TestButton>
      <NavBar />
    </View>
  );
}
