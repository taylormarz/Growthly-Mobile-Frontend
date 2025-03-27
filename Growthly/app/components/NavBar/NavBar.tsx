import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useUser } from '@/context/UserContext';
import styles from '@/app/components/NavBar/NavBar.styles';
import { useBorrowerNavigation } from '@/app/utils/navigation/borrowerNavigation';
import { useLenderNavigation } from '@/app/utils/navigation/lenderNavigation';

const NavBar = () => {
  const { user } = useUser();
  const isBorrower = user?.user_type === 'BORROWER';

  const borrowerNav = useBorrowerNavigation();
  const lenderNav = useLenderNavigation();

  return (
    <View style={styles.navbar}>

      {/* dashboard */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={isBorrower ? borrowerNav.navigateToBorrowerDashboard : lenderNav.navigateToLenderDashboard}
      >
        <Image
          source={require('@/assets/images/icons/home-icon.png')}
          style={styles.icon}
        />
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      {/* loans */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={isBorrower ? borrowerNav.navigateToBorrowerLoans : lenderNav.navigateToLenderLoans}
      >
        <Image
          source={require('@/assets/images/icons/loan-icon.png')}
          style={styles.icon}
        />
        <Text style={styles.iconLabel}>Loan</Text>
      </TouchableOpacity>

      {/* matches (visible for borrowers only) */}
      {isBorrower && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={borrowerNav.navigateToBorrowerMatches}
        >
          <Image
            source={require('@/assets/images/icons/matches-icon.png')}
            style={styles.icon}
          />
          <Text style={styles.iconLabel}>Matches</Text>
        </TouchableOpacity>
      )}

      {/* credit */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={isBorrower ? borrowerNav.navigateToBorrowerCredit : lenderNav.navigateToLenderCredit}
      >
        <Image
          source={require('@/assets/images/icons/credit-icon.png')}
          style={styles.icon}
        />
        <Text style={styles.iconLabel}>Credit</Text>
      </TouchableOpacity>

      {/* settings */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={isBorrower ? borrowerNav.navigateToBorrowerSettings : lenderNav.navigateToLenderSettings}
      >
        <Image
          source={require('@/assets/images/icons/setting-icon.png')}
          style={styles.icon}
        />
        <Text style={styles.iconLabel}>Settings</Text>
      </TouchableOpacity>

      {/* logout (only visible for lenders) */}
      {!isBorrower && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={lenderNav.navigateToOut}
        >
          <Image
            source={require('@/assets/images/icons/exit-icon.png')}
            style={styles.icon}
          />
          <Text style={styles.iconLabel}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavBar;
