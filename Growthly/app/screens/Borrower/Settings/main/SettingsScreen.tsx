import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useUser } from '../../../../../context/UserContext';
import { useBorrowerNavigation } from '@/app/utils/navigation/borrowerNavigation';
import styles from '@/styles/Settings/main/settings-styles';
import Header from '@/app/components/Header/Header';
import SettingButton from '../../../../components/SecondaryButton/SettingButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function SettingsScreen() {
  const { user } = useUser();
  const borrowerNav = useBorrowerNavigation();

  return (
    <View style={styles.screenContainer}>
      <Header
        title={`Welcome, ${user?.first_name || 'Guest'}! `}
        subtitle="Make changes to your account below."
      />

      <Text style={styles.headerText}>Settings</Text>
      <View style={styles.settingsContainer}>
        <View>
          <View>
            {/* settings list */}
            <SettingButton
              listItem="Edit Bank Account"
              buttonText="+"
              onPress={borrowerNav.navigateToBorrowerBankAccount}
            ></SettingButton>
            <SettingButton
              listItem="Edit Email"
              buttonText="+"
              onPress={borrowerNav.navigateToBorrowerEditEmail}
            ></SettingButton>
            <SettingButton
              listItem="Edit Address"
              buttonText="+"
              onPress={borrowerNav.navigateToBorrowerEditAddress}
            ></SettingButton>
            <SettingButton
              listItem="Change Password"
              buttonText="+"
              onPress={borrowerNav.navigateToBorrowerChangePass}
            ></SettingButton>
            <SettingButton
              listItem="Contact Us"
              buttonText="+"
              onPress={borrowerNav.navigateToBorrowerContactUs}
            ></SettingButton>

            {/* delete account button */}
            <View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={borrowerNav.navigateToBorrowerDeleteAccount}>
                <Text
                  style={styles.buttonText}>Delete Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <NavBar />
    </View>
  );
}
