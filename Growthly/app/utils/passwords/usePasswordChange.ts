import { useState } from 'react';
import { useUser } from '@/context/UserContext';
import Toast from 'react-native-toast-message';
import { Keyboard } from 'react-native';

export const usePasswordChange = (navigateBackToSettings: () => void) => {
  const { user } = useUser();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePassChange = async () => {
    if (!user?._id) return;

    // Ensure the passwords match
    if (newPassword !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Error:',
        text2: 'New password and confirmation must match. Try again.',
      });
      return;
    }

    try {
      Keyboard.dismiss();
      const response = await fetch(
        `https://growthly-backend.onrender.com/api/v1/users/${user._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: newPassword }),
        }
      );

      const backendResponseText = await response.text();

      if (!response.ok) {
        throw new Error(`Error updating password: ${backendResponseText}`);
      }

      // Password updated successfully
      Toast.show({
        type: 'success',
        text1: 'Success:',
        text2: 'Your password was updated!',
      });

      // Navigate back to settings
      navigateBackToSettings();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error:',
        text2: 'Your password was not updated. Try again.',
      });
      console.error(error);
    }
  };

  return {
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    handlePassChange,
  };
};
