import React, { useState } from 'react';
import { 
  View, 
  Keyboard, 
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/context/UserContext';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import Toast from 'react-native-toast-message';
import Input from '@/app/components/TestInput/TestInput';
import TestButton from '@/app/components/TestButton/TestButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditEmailScreen() {
  const router = useRouter();
  // user context
  const { user } = useUser();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePassChange = async () => {
    // user id confirmation
    if (!user?._id) return;

    // comparison of 
    if (newPassword !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Error:',
        text2: 'New password and confirmation must match. Try again.'
      });
      return;
    }

    try {
      // remove keyboard from view
      Keyboard.dismiss();
  
      // send request to endpoint to update pass, store server response
      const response = await fetch(`https://growthly-backend.onrender.com/api/v1/users/${user._id}`, 
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: newPassword })
        }
      );

      // store response from backend
      const backendResponseText = await response.text();
      console.log(backendResponseText);

      // if response is not ok, inform user of error
      if (!response.ok) {
        throw new Error (`Error updating password: ${backendResponseText}`);
      }

      // if fine, user will see success toast
      Toast.show({
        type: 'success',
        text1: 'Success:',
        text2: 'Your password was updated!'
      });
  
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error:',
        text2: 'Your password was not updated. Try again.'
      });

      console.log(error)
    }
  };

  const navigateBackToSettings = () => {
    router.push('../../main/SettingsScreen');
  };

  return (
    <View style={styles.screenContainer}>
      {/* logo + cancel button banner */}
      <Banner
        subheading='Update Password Below'
        heading='Change Password'
        onPress={navigateBackToSettings}
      />

      <Input 
        placeholder='Current Password'
        onChangeText={setCurrentPassword}
        secureTextEntry={true}
      />
      <Input 
        placeholder='New Password'
        onChangeText={setNewPassword}
        secureTextEntry={true}
      />
      <Input 
        placeholder='Confirm New Password'
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      <TestButton
        title='Confirm Changes'
        onPress={handlePassChange}
      />

      <NavBar />
    </View>
  );
}
