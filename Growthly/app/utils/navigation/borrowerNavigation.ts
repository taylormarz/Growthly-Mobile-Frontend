import { useRouter } from 'expo-router';

export const useBorrowerNavigation = () => {
  const router = useRouter();

  return {
    navigateToOut: () => router.push('/'),
    navigateToBorrowerDashboard: () => router.push('/screens/Borrower/Dashboard/DashboardScreen'),
    navigateToBorrowerLoans: () => router.push('/screens/Borrower/Loans/LoansScreen'),
    navigateToBorrowerMatches: () => router.push('/screens/Borrower/Matches/MatchesScreen'),
    navigateToBorrowerCredit: () => router.push('/screens/Borrower/Credit/CreditScreen'),
    navigateToBorrowerSettings: () => router.push('/screens/Borrower/Settings/main/SettingsScreen'),
  };
};
