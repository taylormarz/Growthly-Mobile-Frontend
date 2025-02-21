// DashboardScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUser } from '../../context/UserContext';
import { useRouter } from 'expo-router';
import styles from '@/styles/dashboard-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';
import OverviewComponent from '../components/OverviewComponent/OverviewComponent';

const DashboardScreen = () => {

  const { user } = useUser();
  const router = useRouter();

  // hook for logout button
  const handleLogout = () => {
    router.push('/');
  };

  // hook for loans page
  const handleViewLoans = () => {
    router.push('../screens/LoansScreen');
  }

  // hook for match page
  const handleViewMatch = () => {
    router.push('../screens/MatchesScreen');
  }

  // hook for credit page
  const handleViewCredit = () => {
    router.push('../screens/CreditScreen');
  }

  // hook for settings page
  const handleViewBankInfo = () => {
    router.push('../screens/SettingsScreen');
  }

  return (
    <View style={styles.screenContainer}>
      <Header 
        title={`Welcome, ${user?.first_name || 'Guest'}!`}
        subtitle='Review account overview below.'
      />
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>LOGOUT</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Overview</Text>

      <View style={styles.overviewContainer}>
        <OverviewComponent
          title='Active Loans'
          value='0 Active Loan' // hard coded this for now but i will switch out once i set up a context for loans
          buttonText='View Loans >'
          onPress={handleViewLoans}
        />
        <OverviewComponent 
          title='Matches'
          value='0 Matches' // hard coded - same as above
          buttonText='View Match >'
          onPress={handleViewMatch}
        />
        <OverviewComponent
          title='Credit Score'
          value='715 / 900' // hard coded - same as above
          buttonText='View Details >'
          onPress={handleViewCredit}
        />
        <OverviewComponent 
          title='Bank Account'
          value='004-54689' // hard coded - same as above
          buttonText='Update Info >'
          onPress={handleViewBankInfo}
        />
      </View>

      <NavBar />
    </View>
  );
};

export default DashboardScreen;