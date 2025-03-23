import { useRouter } from 'expo-router';

export const useBorrowerNavigation = () => {
  const router = useRouter();

  // TEMP PATHS (will need to be updated once moved into Screens>Borrower directory)
  return {
    navigateToOut: () => router.push('/'),
    navigateToBorrowerDashboard: () => router.push('/screens/Dashboard/DashboardScreen'),
    navigateToBorrowerLoans: () => router.push('/screens/Loans/LoansScreen'),
    navigateToBorrowerMatches: () => router.push('/screens/Matches/MatchesScreen'),
    navigateToBorrowerCredit: () => router.push('/screens/Credit/CreditScreen'),
    navigateToBorrowerSettings: () => router.push('/screens/Settings/main/SettingsScreen'),
  };
};
