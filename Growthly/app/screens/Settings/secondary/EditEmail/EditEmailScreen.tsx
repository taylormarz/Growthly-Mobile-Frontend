import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import Input from '@/app/components/TestInput/TestInput';
import HalfInput from '@/app/components/HalfInput/HalfInput';
import TestButton from '@/app/components/TestButton/TestButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditEmailScreen() {
  const router = useRouter();

  const navigateBackToSettings = () => {
    router.push('../../main/SettingsScreen');
  };

  return (
    <View style={styles.screenContainer}>
      {/* logo + cancel button banner */}
      <Banner
        subheading="Update Email and/or Username Below"
        heading="Edit Email"
        onPress={navigateBackToSettings}
      ></Banner>

      <Input placeholder="Email"></Input>
      <Input placeholder="Username"></Input>
      <TestButton
        title="Confirm Changes"
        onPress={navigateBackToSettings}
      ></TestButton>

      <NavBar />
    </View>
  );
}
