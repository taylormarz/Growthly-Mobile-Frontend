// DashboardScreen.tsx (BORROWER)
import React, {
  useState,
  useEffect,
} from 'react';
import {
  fetchLoansByUserId,
} from '@/app/utils/loans/loanUtils';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useUser } from '../../../context/UserContext';
import { useRouter } from 'expo-router';
import styles from '@/styles/Dashboard/dashboard-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';
import OverviewComponent from '../../components/OverviewComponent/OverviewComponent';

const DashboardScreen = () => {
  const { user } = useUser();
  const router = useRouter();
  const [currentLoan, setCurrentLoan] = useState<any>(null);

  // hook for logout button
  const handleLogout = () => {
    router.push('/');
  };

  // hook for loans page
  const handleViewLoans = () => {
    router.push('../Loans/LoansScreen');
  };

  // hook for match page
  const handleViewMatch = () => {
    router.push('../Matches/MatchesScreen');
  };

  // hook for credit page
  const handleViewCredit = () => {
    router.push('../Credit/CreditScreen');
  };

  // hook for settings page
  const handleViewBankInfo = () => {
    router.push('../Settings/main/SettingsScreen');
  };

  useEffect(() => {
    fetchCurrentLoan();
  }, []);

  // call to backend to check if user has any posted loans attached to them
  const fetchCurrentLoan = async () => {
    if (!user?._id) return;
    const loans = await fetchLoansByUserId({
      userId: user._id,
      endpoint: 'https://growthly-backend.onrender.com/api/v1/borrower/loan/',
      idField: 'borrower_id',
    });
    setCurrentLoan(loans);
  };

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
          value={`${currentLoan?.length || 0} Active Loans`}
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
          value='715 / 900'
          buttonText='View Details >'
          onPress={handleViewCredit}
        />
        <OverviewComponent
          style={styles.componentLast}
          title='Bank Account'
          value='004-54689'
          buttonText='Update Info >'
          onPress={handleViewBankInfo}
        />
      </View>

      <NavBar />
    </View>
  );
};

export default DashboardScreen;
