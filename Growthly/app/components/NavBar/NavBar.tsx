import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import styles from '@/app/components/NavBar/NavBar.styles';

const NavBar = () => {

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/screens/Dashboard/DashboardScreen')}>
        <Image source={require('@/assets/images/icons/home-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/screens/Loans/LoansScreen')}>
        <Image source={require('@/assets/images/icons/loan-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Loan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/screens/Matches/MatchesScreen')}>
        <Image source={require('@/assets/images/icons/matches-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Matches</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/screens/Credit/CreditScreen')}>
        <Image source={require('@/assets/images/icons/credit-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Credit</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/screens/Settings/main/SettingsScreen')}>
        <Image source={require('@/assets/images/icons/setting-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;