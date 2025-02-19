import React from 'react';
import { View, Text} from 'react-native';
import { useUser } from '../context/UserContext';
import styles from '@/styles/dashboard-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';

const DashboardScreen = () => {
  const { user } = useUser();

  return (
    <View style={styles.screenContainer}>
      <Header 
        title={`Welcome, ${user}!`}
        subtitle='Review account overview below.'
      />
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Dashboard Screen</Text>
      </View>
      <NavBar />
    </View>
  );
};

export default DashboardScreen;