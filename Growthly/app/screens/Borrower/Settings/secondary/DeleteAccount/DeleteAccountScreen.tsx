import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/context/UserContext';
import { fetchUserLoans } from '@/app/utils/loans/fetchUserLoan';
import { deleteUserAccount } from '@/app/utils/delete/deleteUser';
import styles from '@/styles/Settings/secondary/delete-account-styles';
import Banner from '@/app/components/Banner/Banner';
import NavBar from '@/app/components/NavBar/NavBar';

export default function DeleteAccountScreen() {
  const router = useRouter();
  const { user } = useUser();
  const [currentLoans, setCurrentLoans] = useState<any[]>([]);

  const fetchCurrentLoans = async () => {
    if (!user) return;

    const userLoans = await fetchUserLoans({
      userId: user._id,
      userType: user.user_type as 'BORROWER' | 'LENDER',
    });

    setCurrentLoans(userLoans);
  };

  useEffect(() => {
    fetchCurrentLoans();
  }, []);

  // deleted user account
  const handleDeleteAccount = () => {
    if (!user?._id) return;
    deleteUserAccount({ userId: user._id, currentLoans, router });
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
