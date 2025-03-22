import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/context/UserContext';
import styles from '@/styles/Settings/secondary/delete-account-styles';
import Banner from '@/app/components/Banner/Banner';
import Toast from 'react-native-toast-message';
import NavBar from '@/app/components/NavBar/NavBar';

export default function DeleteAccountScreen() {
  const router = useRouter();
  const { user } = useUser();

  const [currentLoans, setCurrentLoans] = useState<any[]>([]);

  // i can make this global since its used in loans too. checks if the user has any active loans. 
  const fetchCurrentLoans = async () => {
    try {
      const response = await fetch(`https://growthly-backend.onrender.com/api/v1/borrower/loan/`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Loan fetch error:', errorText);
        return;
      }

      const data = await response.json();

	  // filters all current loans by referencing user id to borrower id
      const userLoans = data.filter((loan: any) => loan.borrower_id === user?._id);
      setCurrentLoans(userLoans);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };

  useEffect(() => {
    fetchCurrentLoans();
  }, []);

  // deleted user account
  const handleDeleteAccount = async () => {
	// checks for user id (needed to deletion)
    if (!user?._id) return;

	// checks the amount of loans stored in currentLoans
    if (currentLoans.length > 0) {
		// user gets error toast is they try to delete account with ANY number of active loans
      Toast.show({
        type: 'error',
        text1: 'Cannot Delete Account:',
        text2: 'You must have 0 active loans to delete your account.',
      });
      return;
    }

	// if the user DOESN'T have any currently loans, they can delete their account
    try {
      const response = await fetch(`https://growthly-backend.onrender.com/api/v1/users/${user._id}`, {
        method: 'DELETE',
      });

      const backendResponseText = await response.text();
      console.log('Delete response:', backendResponseText);

      if (!response.ok) {
        throw new Error('Account deletion failed.');
      }

	  // success toast shown to user if their account id deleted successfully
      Toast.show({
        type: 'success',
        text1: 'Account Deleted',
        text2: 'Your Growthly account has been permanently removed.',
      });

	  // user is brought back to signin page (their account no longer exists in system)
      router.push('/');

    } catch (error) {
      console.error(error);
	  // shows error toast if account isn't deleted (error in case something besides having active loans prevents user from deleting)
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to delete your account. Please try again.',
      });
    }
  };

  const navigateBackToSettings = () => {
    router.push('../../main/SettingsScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <Banner
        subheading="WARNING: This is a permanent decision."
        heading="Delete Account?"
        onPress={navigateBackToSettings}
      />

      <View style={styles.confirmationContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={navigateBackToSettings}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.deleteButton, styles.deleteButtonV2]} onPress={handleDeleteAccount}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
      </View>

      <NavBar />
    </View>
  );
}
