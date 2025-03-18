import React, { 
  useState,
} 
from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/context/UserContext';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Toast from 'react-native-toast-message';
import Banner from '@/app/components/Banner/Banner';
import Input from '@/app/components/TestInput/TestInput';
import TestButton from '@/app/components/TestButton/TestButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditEmailScreen() {
  const router = useRouter();
  // user context
  const { user, setUserData } = useUser();

  // user input stored in these states
  const [email, setEmail] = useState(user?.email || '');
  const [username, setUsername] = useState(user?.username || '');

  // function for updating user info
  const handleUserUpdate = async () => {
    // check for user id (stored in user context but just incase)
    if (!user?._id) return;

    try {
      // sends req to endpoint to update user then stores sever res
      const response = await fetch(`https://growthly-backend.onrender.com/api/v1/user/${user._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, username }),
        }
      );

      // if backend response is not okay, shows error message
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Error updating email/username');
      }

      // get the updated data from backend res
      const updatedUser = await response.json();
      // update user context with data from response obj
      setUserData(updatedUser)

      // success toast for user
      Toast.show({
        type: 'success',
        text1: 'Success:',
        text2: 'Your email/username was updated!'
      });
      // err toast if something didn't work
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error:',
        text2: 'Your email/username was not updated. Try again.'
      });

      console.log(error)
    }
  }

  // nav for cancel button (takes back to settings main screen)
  const navigateBackToSettings = () => {
    router.push('../../main/SettingsScreen');
  };

  return (
    <View style={styles.screenContainer}>
      {/* logo + cancel button banner */}
      <Banner
        subheading='Update Email and/or Username Below'
        heading='Edit Email'
        onPress={navigateBackToSettings}
      />

      {/* data for user coming from user context */}
      <Input 
        placeholder={user?.email || 'Email'}
        //onChangeText={setEmail}
      />
      <Input 
        placeholder={user?.username || 'Username'}
        //onChangeText={setUsername}
      />
      <TestButton
        title='Confirm Changes'
        onPress={handleUserUpdate}
      />

      <NavBar />
    </View>
  );
}