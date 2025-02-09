import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '@/app/components/NavBar/NavBar.styles';

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('@/assets/images/icons/home-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('@/assets/images/icons/loan-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Loan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('@/assets/images/icons/matches-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Matches</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('@/assets/images/icons/credit-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Credit</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('@/assets/images/icons/setting-icon.png')} style={styles.icon} />
        <Text style={styles.iconLabel}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;